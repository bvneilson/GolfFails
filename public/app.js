var app = angular.module('GolfFails', ['ngRoute']);

app.config(function($routeProvider, $sceDelegateProvider){

  //router here
  $routeProvider
  .when('/', {
    templateUrl: "main/mainTmpl.html",
    controller: "mainCtrl"
  })

  .when('/userDash', {
    templateUrl: "userDashboard/userDashTmpl.html",
    controller: "userDashCtrl.js"
  })

  .otherwise({
  	redirectTo: '/'
  })

  $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.youtube.com/**'
      ]);
});