var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/impressum', ensureAuthenticated, function(req, res){
	res.render('impressum');
});
/*
function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/about');
	}
}*/

module.exports = router;