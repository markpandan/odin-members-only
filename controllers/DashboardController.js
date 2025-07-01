const db = require("../db/queries");

async function dashboardGet(req, res) {
  const userDetails = await db.getFullUserDetails(req.user.id);
  res.render("index", { page: "dashboard", userDetails });
}

async function dashboardPost(req, res) {
  try {
    await db.insertNewPost(req.user.id, req.body.title, req.body.content);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
}

async function dashboardSecretCodePost(req, res) {
  try {
    await db.verifyMembership(req.user.id, req.body.code);
    res.redirect("/dashboard");
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  dashboardGet,
  dashboardPost,
  dashboardSecretCodePost,
};
