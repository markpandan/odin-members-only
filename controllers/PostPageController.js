const db = require("../db/queries");

async function postPageGet(req, res) {
  const postDetail = await db.getPostDetailsById(req.params.id);
  res.render("index", { page: "post", postDetail });
}

function postPagePost(req, res) {}

module.exports = {
  postPageGet,
  postPagePost,
};
