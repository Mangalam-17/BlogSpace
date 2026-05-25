require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const Blog = require("./models/blog");

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

const app = express();
const PORT = process.env.PORT || 3000;
const dbUrl = process.env.MONGO_URL;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

mongoose.connect(dbUrl).then((e) => {
  console.log("MongoDB connected successfully");
});

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET_KEY,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("ERROR in Mongo Session Store", error);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));

const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get("/", async (req, res) => {
  let allBlogs = await Blog.find({});
  
  if (allBlogs.length === 0) {
    allBlogs = [
      {
        _id: "mock1",
        title: "The Future of AI Assistants",
        description: "Explore how AI is revolutionizing our daily workflows and enhancing productivity.",
        coverImageURL: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
      },
      {
        _id: "mock2",
        title: "Mastering Full-Stack Development",
        description: "A comprehensive guide to building modern web applications with Node.js and React.",
        coverImageURL: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"
      },
      {
        _id: "mock3",
        title: "Beautiful UI/UX Design Trends",
        description: "Discover the latest trends in user interface design that are captivating users.",
        coverImageURL: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
      },
      {
        _id: "mock4",
        title: "Scaling Your MongoDB Database",
        description: "Best practices for schema design, indexing, and optimizing queries in NoSQL.",
        coverImageURL: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
      }
    ];
  }

  res.render("home", {
    user: req.session.user,
    blogs: allBlogs,
  });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
