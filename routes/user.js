const { Router } = require("express");
const User = require("../models/user");

const router = Router();

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    const user = await User.findOne({ email }); // Fetch the user details

    if (user) {
      req.session.user = {
        id: user._id,
        fullName: user.fullName, // Access the fullName from the fetched user
        profileImageURL: user.profileImageURL,
        role: user.role,
        // You can add other relevant user details here if needed
      };
      return res.cookie("token", token).redirect("/");
    } else {
      return res.render("signin", {
        error:
          "User not found after token generation (this should ideally not happen)",
      });
    }
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect Email or Password",
    });
  }
});

// router.get("/logout", (req, res) => {
//   res.clearCookie("token").redirect("/");
// });

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      // Handle the error appropriately, maybe redirect with an error message
    }
    res.redirect("/");
  });
});

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });
  return res.redirect("/");
});

module.exports = router;
