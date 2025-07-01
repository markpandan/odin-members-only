const db = require("../db/queries");

async function postPageGet(req, res) {
  const postDetail = await db.getPostDetailsById(req.params.id);
  res.render("index", { page: "post", postDetail });
}

// function postPagePost(req, res) {}

async function postPageDelete(req, res, next) {
  try {
    await db.deletePostById(req.body.postId);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  postPageGet,
  postPageDelete,
};
