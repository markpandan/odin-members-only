const db = require("../db/queries");

function signupGet(req, res) {
  res.render("index", { page: "signup" });
}

async function signupPost(req, res, next) {
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
}

module.exports = {
  signupGet,
  signupPost,
};
