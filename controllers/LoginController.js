const passport = require("passport");

function loginGet(req, res) {
  res.render("index", { page: "login" });
}

const loginPost = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/",
});

module.exports = {
  loginGet,
  loginPost,
};
