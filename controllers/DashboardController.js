const db = require("../db/queries");

function dashboardGet(req, res) {
  res.render("index", { page: "dashboard" });
}

async function dashboardPost(req, res) {
  try {
    await db.insertNewPost(req.user.id, req.body.title, req.body.content);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  dashboardGet,
  dashboardPost,
};
