const passport = require("passport");

function loginGet(req, res) {
  res.render("index", { page: "login", error: req.session.messages });
  req.session.messages = undefined;
}

const loginPost = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureMessage: "Username or password is incorrect",
});

module.exports = {
  loginGet,
  loginPost,
};
