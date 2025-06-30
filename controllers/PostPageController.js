function postPageGet(req, res) {
  res.render("index", { page: "post" });
}

function postPagePost(req, res) {}

module.exports = {
  postPageGet,
  postPagePost,
};
