var app = angular.module('GolfFails');

app.controller('mainCtrl', function($scope, mainService){
	// $scope.videos = [
	// {url: "https://www.youtube.com/embed/3PNsMXe170Q"},
	// {url:"https://www.youtube.com/embed/6FMyblJkLSM"},
	// {url:"https://www.youtube.com/embed/0lRTHrLE8qo"},
	// {url:"https://www.youtube.com/embed/rHzfwqjppag"},
	// {url:"https://www.youtube.com/embed/jCIP_WzhBg8"},
	// {url:"https://www.youtube.com/embed/WbhrHnNf97s"},
	// {url:"https://www.youtube.com/embed/uI6-dcpsQ-s"},
	// {url:"https://www.youtube.com/embed/t1WzFfq0qSM"},
	// {url:"https://www.youtube.com/embed/ojCMxJKT9fA"}
	// ];

	$scope.createUser = function() {
		console.log($scope.email, $scope.password);
		mainService.createUser($scope.email, $scope.password).then(function(data) {
			console.log(data);
		});
	$scope.loginUser = function() {
		mainService.loginUser($scope.email, $scope.password).then(function(data) {
			console.log(data);
		})
	}

	$scope.getVideos = function() {
		mainService.getVideos().then(function(data) {
			console.log(data);
			$scope.videos = data;
		})
	}

	$scope.getVideos();

	};
});