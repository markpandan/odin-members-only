function loginGet(req, res) {
  res.render("index", { page: "login" });
}

function loginPost(req, res) {}

module.exports = {
  loginGet,
  loginPost,
};
