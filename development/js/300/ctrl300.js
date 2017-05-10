angular.module("App").controller('ctrl300', function($scope, service300) {

    $scope.showVehicles = false;


    $scope.getCars = function() {
     service300.getCars(300).then(function(response) {
       $scope.cars = response;
       console.log(response);
     })

   }


   $scope.getCars()


   $scope.getImages = function() {
     service300.getImages(300).then(function(response) {
       $scope.limited = []
       $scope.s300 = []
       $scope.c300 = []
       $scope.platinum = []

       response.forEach(function(v, i, a) {
         switch(v.package) {
           case 'Limited':
            $scope.limited.push(v)
            break;
           case '300S':
            $scope.s300.push(v)
            break;
           case '300C':
            $scope.c300.push(v)
            break;
           case '300C Platinum':
            $scope.platinum.push(v)
            break;
         }

       });
       $scope.images=$scope.limited;
       $scope.currentImage = $scope.images[0].image_url;
      //  console.log(response);
     })
   }

   $scope.selectPackage = function(pkg) {
     $scope.images = $scope[pkg]
      $scope.currentImage = $scope.images[0].image_url;
      if (pkg === 's300') {
        $scope.shows300 = true;
      } else {
        $scope.shows300 = false;
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
