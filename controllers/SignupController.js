const db = require("../db/queries");
const { body, matchedData, validationResult } = require("express-validator");

const validateCredentials = [
  body("username")
    .trim()
    .custom(async (value) => {
      const existingUser = await db.getUserByUsername(value);
      if (existingUser) {
        throw new Error("Username already exists");
      }
    }),
  body("email")
    .trim()
    .custom(async (value) => {
      const existingEmail = await db.getUserByEmail(value);
      if (existingEmail) {
        throw new Error("Email already exists");
      }
    }),
];

function signupGet(req, res) {
  res.render("index", { page: "signup" });
}

const signupPost = [
  validateCredentials,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .render("index", { page: "signup", errors: errors.array() });
    }

    try {
      await db.insertNewUser(
        req.body.username,
        req.body.email,
        req.body.password
      );
      res.redirect("/login");
    } catch (err) {
      return next(err);
    }
  },
];

module.exports = {
  signupGet,
  signupPost,
};
