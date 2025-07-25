function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
}

function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.is_admin) {
    next();
  } else {
    res.redirect("/");
  }
}

module.exports = {
  isAuth,
  isAdmin,
};
