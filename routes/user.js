const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const userController = require("../controllers/users.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

// Signup Get Route
router.get("/signup", userController.renderSignupForm);
// Signup Get Route
router.post("/signup", wrapAsync(userController.signup));

// Login Get Route
router.get("/login", userController.renderLoginForm);
// Login Post Route
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login,
);
// Logout Route
router.get("/logout", userController.logout);
module.exports = router;
