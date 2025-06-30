function dashboardGet(req, res) {
  res.render("index", { page: "dashboard" });
}

function dashboardPost(req, res) {}

module.exports = {
  dashboardGet,
  dashboardPost,
};
