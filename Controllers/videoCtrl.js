var Video = require('../models/video.js');

module.exports = {
	createVideo: function(req, res) {
		var newVideo = new Video(req.body);
		newVideo.save(function(err, result) {
			if(err) {
				return res.status(500).end();
			}
			console.log(result);
			return res.json(result);
		})
	},
	getVideos: function(req, res) {
		Video.find({}, function(err, result) {
			if(err) {
				return res.status(500).end();
			}
			console.log(result);
			return res.json(result);
		})
	}
};