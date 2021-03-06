/**
 * Authentication Controller
 *
 * This is merely meant as an example of how your Authentication controller
 * should look. It currently includes the minimum amount of functionality for
 * the basics of Passport.js to work.
 */
var AuthController = {
  // logout
  logout: function (req, res) {
    req.logout();
    
    // mark the user as logged out for auth purposes
    req.session.authenticated = false;
    
    res.redirect('/');
  },

  // callback for register and login
  callback: function (req, res) {
    passport.callback(req, res, function (err, user, challenges, statuses) {
      if (err || !user) {
        return res.notFound(err)
      } else {
         // for login only
          if ( !req.param('action') ) {
            req.session.authenticated = true;
          }

          return res.ok( user );
      }
    } );
  }
};

module.exports = AuthController;
