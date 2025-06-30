function signupGet(req, res) {
  res.render("index", { page: "signup" });
}

function signupPost(req, res) {}

module.exports = {
  signupGet,
  signupPost,
};
