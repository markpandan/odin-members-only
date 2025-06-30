function adminGet(req, res) {
  res.render("index", { page: "admin" });
}

function adminPost(req, res) {}

module.exports = {
  adminGet,
  adminPost,
};
