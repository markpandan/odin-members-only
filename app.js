const express = require("express");
const session = require("express-session");
const path = require("node:path");
const passport = require("passport");
const pgSession = require("connect-pg-simple")(session);
const pool = require("./db/pool");

require("dotenv").config();

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new pgSession({
      pool,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    },
  })
);

require("./lib/passport");

app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

const adminRoute = require("./routes/AdminRoute");
app.use("/admin", adminRoute);

const dashboardRoute = require("./routes/DashboardRoute");
app.use("/dashboard", dashboardRoute);

const homeRoute = require("./routes/HomeRoute");
app.use("/", homeRoute);

const loginRoute = require("./routes/LoginRoute");
app.use("/login", loginRoute);

const postPageRoute = require("./routes/PostPageRoute");
app.use("/post", postPageRoute);

const signupRoute = require("./routes/SignupRoute");
app.use("/signup", signupRoute);

app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
  console.log(`Link is http://localhost:${PORT}/`);
});
