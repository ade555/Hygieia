var app = angular.module("myApp", ["ngRoute"]);

//CONTROLLER FOR TABLE
app.controller("DocCtrl", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http
      .get("static/data/hygieia.json")
      .then(function (response) {
        // console.log(response.data.doctors);
        $scope.info = response.data.doctors;
        var docs = $scope.info;
        function generalDocs(docs) {}
        generalDocs(docs);
      })
      .catch(function (err) {
        console.log(err);
      });

    // FILTER FUNCTIONS
    $scope.general = function (x) {
      $scope.filter = x = "General Doctor";
    };
    $scope.optha = function (x) {
        $scope.filter = x = "Opthalmologist";
      };
      $scope.pedri = function (x) {
        $scope.filter = x = "Pediatrician";
      };
      $scope.thera = function (x) {
        $scope.filter = x = "Theraphist";
      };
  },
]);

//ROUTING
app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/main.html#home-top",
      })
      .when("/doctors", {
        templateUrl: "views/doctors.html#doctors-top",
      })
      .otherwise({
        redirectTo: "/home",
      });
    // $routeProvider.html5Mode(true);
    // $routeProvider.hashPrefix('');
  },
]);
