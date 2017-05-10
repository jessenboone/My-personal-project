angular.module("App").controller('ctrl200', function($scope, service200) {

  $scope.showVehicles = false;

  $scope.getCars = function() {
    service200.getCars(200).then(function(response){
      $scope.cars = response;
      console.log(response);
    })

   }


   $scope.getCars()


   $scope.getImages = function() {
     service200.getImages(200).then(function(response) {
       $scope.images = response;
       console.log(response);
     })
   }


    $scope.getImages()

});
