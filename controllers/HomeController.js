function homeGet(req, res) {
  res.render("index", { page: "home" });
}

function homePost(req, res) {}

module.exports = {
  homeGet,
  homePost,
};
