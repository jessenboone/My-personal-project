angular.module("App").controller('ctrl300', function($scope, service300) {

    $scope.getCars = function() {
     service300.getCars(300).then(function(response) {
       console.log('response');
       $scope.cars = response;
     })

   }


$scope.getCars()




});
