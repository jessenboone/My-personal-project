angular.module("App").controller('ctrl200', function($scope, service200) {

    $scope.showVehicles = false;


    $scope.getCars = function() {
     service200.getCars(200).then(function(response) {
       $scope.cars = response;
       console.log(response);
     })

   }


   $scope.getCars()


   $scope.getImages = function() {
     service200.getImages(200).then(function(response) {
       $scope.touring = []
       $scope.platinum = []
      console.log(response);
       response.forEach(function(v, i, a) {
         switch(v.package) {
           case 'Touring':
            $scope.touring.push(v)
            break;
           case 'Limited Platinum':
            $scope.platinum.push(v)
            break;
         }

       });
       $scope.images=$scope.touring;
       console.log($scope.images);
       $scope.currentImage = $scope.images[0].image_url;

     })
   }

   $scope.selectPackage = function(pkg) {
     $scope.images = $scope[pkg]
      $scope.currentImage = $scope.images[0].image_url;
      if (pkg === 's200') {
        $scope.shows200 = true;
      } else {
        $scope.shows200 = false;
      }
     console.log($scope.images);
   }

   $scope.colorPicker = function(color) {
     $scope.currentImage = $scope.images.filter(function(v, i, a) {
       if (color === v.color) {
         return v.image_url;
       }
     })[0].image_url;
   }

    $scope.getImages()



});
