module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      //are they logged in
      return next();
      //then continue
    } else {
      res.redirect("/");
      //if not logged in bring them to 
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};
