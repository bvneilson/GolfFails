var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
	userName: { type: String },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true},
	favorites: [{type: mongoose.Schema.Types.ObjectId, ref: "Video"}]
});

userSchema.pre('save', function(next) {
	var user = this;

	bcrypt.genSalt(10, function(err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt, function(err, hash) {
			if(err) return next(err);
			else {
				user.password = hash;
				next();
			}
		})
	})
});

userSchema.methods.comparePassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);