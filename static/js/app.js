var app = angular.module('myApp', ['ngRoute']);

//CONTROLLER FOR TABLE
app.controller('tableController', [ '$scope', '$http', function ($scope, $http) {
    $http.get('assets/data/hygieia.json')
    .then(function(response){
        console.log(response.data.table);
        $scope.info = response.data.table;
    })
    .catch(function(err){
        console.log(err)
    })
}])

//ROUTING
app.config(['$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/home',{
        templateUrl: "views/main.html#home-top",
    })
    .when('/doctors',{
        templateUrl: "views/doctors.html#doctors-top",
    })
    .otherwise({
        redirectTo: '/home'
    })
    // $routeProvider.html5Mode(true);
    // $routeProvider.hashPrefix('');
}])