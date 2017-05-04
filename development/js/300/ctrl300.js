angular.module("App").controller('ctrl300', function($scope, service300) {

    $scope.getCars = function() {
     service300.getCars(300).then(function(response) {
       $scope.cars = response;
       console.log(response);
     })

   }


   $scope.getCars()


   $scope.getImages = function() {
     service300.getImages(300).then(function(response) {
       $scope.images = response;
       console.log(response);
     })
   }


    $scope.getImages()

});
