var app = angular.module('GolfFails');

app.service('mainService', function($http, $q) {
	this.createUser = function(email, password) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/user/create',
			data: {
				email: email,
				password: password
			}
		}).then(function(response) {
			console.log("NewUser", response);
			deferred.resolve(response.data)
		});
		return deferred.promise;
	};

	this.loginUser = function(email, password) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/user/login',
			data: {
				username: email,
				password: password
			}
		}).then(function(response) {
			console.log("Logged In", response);
			deferred.resolve(response.data)
		});
		return deferred.promise;
	}

	this.getVideos = function(){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: '/api/videos',
		}).then(function(response) {
			console.log("Got Videos", response);
		deferred.resolve(response.data)
		});
		return deferred.promise;
	}
});