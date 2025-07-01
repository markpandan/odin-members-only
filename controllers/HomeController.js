const db = require("../db/queries");

async function homeGet(req, res) {
  const posts = await db.getAllPosts();
  res.render("index", { page: "home", posts });
}

function homePost(req, res) {}

module.exports = {
  homeGet,
  homePost,
};
