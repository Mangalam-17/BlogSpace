const { Router } = require("express");
const multer = require("multer");
const path = require("path");

const Blog = require("../models/blog");
const Comment = require("../models/comment");

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.get("/add-new", (req, res) => {
  return res.render("addBlog", {
    user: req.user,
  });
});

router.get("/:id", async (req, res) => {
  const mockBlogs = {
    "mock1": {
      _id: "mock1",
      title: "The Future of AI Assistants",
      body: "Artificial Intelligence has come a long way. From simple rule-based chatbots to complex language models, the evolution is astonishing.\n\nIn this blog, we explore how AI assistants like ChatGPT, Claude, and Gemini are revolutionizing daily workflows, enhancing productivity, and fundamentally changing how we interact with technology. The future is here, and it's highly automated.\n\nKey trends to watch include:\n1. Better context retention.\n2. Multi-modal capabilities.\n3. Autonomous agents executing complex tasks.",
      coverImageURL: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
    },
    "mock2": {
      _id: "mock2",
      title: "Mastering Full-Stack Development",
      body: "Full-stack development requires a deep understanding of both front-end and back-end technologies. \n\nIn this guide, we dive into building modern web applications using Node.js for the backend and React for the frontend. We will cover state management, routing, database integrations with MongoDB, and deployment strategies on platforms like Render and Vercel.\n\nWhether you are a beginner or looking to sharpen your skills, mastering the full stack will make you a highly versatile engineer.",
      coverImageURL: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
      createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
    },
    "mock3": {
      _id: "mock3",
      title: "Beautiful UI/UX Design Trends",
      body: "User interface and user experience (UI/UX) design are constantly evolving. This year, we are seeing a massive shift towards more immersive and dynamic interfaces.\n\nGlassmorphism, dark modes, and subtle micro-animations are no longer just trends; they are expectations.\n\nWe explore how to implement these design patterns effectively using CSS and modern JavaScript frameworks to create captivating user experiences that look and feel premium.",
      coverImageURL: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
      createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
    },
    "mock4": {
      _id: "mock4",
      title: "Scaling Your MongoDB Database",
      body: "MongoDB is a powerful NoSQL database, but scaling it requires careful planning. As your application grows, you must consider schema design, efficient indexing, and query optimization.\n\nThis article covers the best practices for scaling MongoDB, including when to use sharding versus replication, how to design for read-heavy vs write-heavy workloads, and the importance of analyzing your query execution plans with the `explain()` method.",
      coverImageURL: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
    }
  };

  if (mockBlogs[req.params.id]) {
    const blog = mockBlogs[req.params.id];
    return res.render("blog", {
      user: req.user,
      blog,
      comments: [],
    });
  }

  try {
    const blog = await Blog.findById(req.params.id).populate("createdBy");
    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    const comments = await Comment.find({ blogId: req.params.id }).populate(
      "createdBy"
    );
    return res.render("blog", {
      user: req.user,
      blog,
      comments,
    });
  } catch (error) {
    return res.status(404).send("Blog not found");
  }
});

router.post("/comment/:blogId", async (req, res) => {
  const comment = await Comment.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });
  return res.redirect(`/blog/${req.params.blogId}`);
});

router.post("/", upload.single("coverImage"), async (req, res) => {
  const { title, body } = req.body;
  const blog = await Blog.create({
    body,
    title,
    createdBy: req.user._id,
    coverImageURL: `/uploads/${req.file.filename}`,
  });
  return res.redirect(`/blog/${blog._id}`);
});

module.exports = router;
