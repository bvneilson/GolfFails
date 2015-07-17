var mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
	name: {type: String, required: true},
	url: {type: String, required: true},
	date: {type: Date, default: Date.now},
	counter: {type: Number, default: 0}
});

module.exports = mongoose.model('Video', videoSchema);