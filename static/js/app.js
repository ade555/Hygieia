var app = angular.module("myApp", ["ngRoute"]);

//CONTROLLER FOR TABLE
app.controller('DocCtrl', [ '$scope', '$http', function ($scope, $http) {
    $http.get('static/data/hygieia.json')
    .then(function(response){
        console.log(response.data.doctors);
        $scope.info = response.data.doctors;
    })
    .catch(function(err){
        console.log(err)
    })

    // FILTER FUNCTIONS
    $scope.all = function(x){
        $scope.filter = x = "All Doctor";
    }
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

// header controller
app.controller('navCtrl', function($scope){
    $scope.openSlide = function(){
        document.getElementById('side-menu').style.width = '250px';
    }
    $scope.closeSlide = function(){
       document.getElementById('side-menu').style.width = '0px';
   }
})
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
  },
]);
