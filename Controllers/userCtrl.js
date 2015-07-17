var User = require('../models/user.js');

module.exports = {
	createUser: function(req, res) {
		var newUser = new User(req.body);
		newUser.save(function(err, result) {
			if (err) {
				return res.status(500).end();
			}
			console.log(result);
			return res.json(result);
		})
	},

	loginUser: function(req, res) {
		return res.status(200).json(req.user);
	}
}