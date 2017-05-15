'use strict';

angular.module("App", ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        templateUrl: './views/home.html',
        controller: 'homeCtrl',
        url: '/'
    }).state('200', {
        templateUrl: './views/200.html',
        controller: 'ctrl200',
        url: '/200'
    }).state('300', {
        templateUrl: './views/300.html',
        controller: 'ctrl300',
        url: '/300'
    });
}]);
'use strict';

angular.module("App").controller('ctrl200', ["$scope", "service200", function ($scope, service200) {

  $scope.showVehicles = false;

  $scope.getCars = function () {
    service200.getCars(200).then(function (response) {
      $scope.cars = response;
      //  console.log(response);
    });
  };

  $scope.getCars();

  $scope.getImages = function () {
    service200.getImages(200).then(function (response) {
      $scope.touring = [];
      $scope.platinum = [];
      // console.log(response);
      response.forEach(function (v, i, a) {
        switch (v.package) {
          case 'Touring':
            $scope.touring.push(v);
            break;
          case 'Limited Platinum':
            $scope.platinum.push(v);
            break;
        }
      });
      $scope.images = $scope.touring;
      //  console.log($scope.images);
      $scope.currentImage = $scope.images[0].image_url;
    });
  };

  $scope.selectPackage = function (pkg) {
    $scope.images = $scope[pkg];
    $scope.currentImage = $scope.images[0].image_url;
    if (pkg === 's200') {
      $scope.shows200 = true;
    } else {
      $scope.shows200 = false;
    }
    //  console.log($scope.images);
  };

  $scope.colorPicker = function (color) {
    $scope.currentImage = $scope.images.filter(function (v, i, a) {
      if (color === v.color) {
        return v.image_url;
      }
    })[0].image_url;
  };

  $scope.getImages();
}]);
'use strict';

angular.module("App").service('service200', ["$http", function ($http) {

  this.getCars = function (model) {
    return $http({
      method: 'GET',
      url: '/api/cars/' + model
    }).then(function (response) {
      return response.data;
      // console.log(response.data)
    });
  };

  this.getImages = function (model) {
    return $http({
      method: 'GET',
      url: '/api/images/' + model
    }).then(function (response) {
      return response.data;
      // console.log(response.data)
    });
  };
}]);
'use strict';

angular.module("App").controller('ctrl300', ["$scope", "service300", function ($scope, service300) {

  $scope.showVehicles = false;

  $scope.getCars = function () {
    service300.getCars(300).then(function (response) {
      $scope.cars = response;
      //  console.log(response);
    });
  };

  $scope.getCars();

  $scope.getImages = function () {
    service300.getImages(300).then(function (response) {
      $scope.limited = [];
      $scope.s300 = [];
      $scope.c300 = [];
      $scope.platinum = [];

      response.forEach(function (v, i, a) {
        switch (v.package) {
          case 'Limited':
            $scope.limited.push(v);
            break;
          case '300S':
            $scope.s300.push(v);
            break;
          case '300C':
            $scope.c300.push(v);
            break;
          case '300C Platinum':
            $scope.platinum.push(v);
            break;
        }
      });
      $scope.images = $scope.limited;
      $scope.currentImage = $scope.images[0].image_url;
      //  console.log(response);
    });
  };

  $scope.selectPackage = function (pkg) {
    $scope.images = $scope[pkg];
    $scope.currentImage = $scope.images[0].image_url;
    if (pkg === 's300') {
      $scope.shows300 = true;
    } else {
      $scope.shows300 = false;
    }
    //  console.log($scope.images);
  };

  $scope.colorPicker = function (color) {
    $scope.currentImage = $scope.images.filter(function (v, i, a) {
      if (color === v.color) {
        return v.image_url;
      }
    })[0].image_url;
  };

  $scope.getImages();
}]);
'use strict';

angular.module("App").service('service300', ["$http", function ($http) {

  this.getCars = function (model) {
    return $http({
      method: 'GET',
      url: '/api/cars/' + model
    }).then(function (response) {
      return response.data;
      // console.log(response.data)
    });
  };

  this.getImages = function (model) {
    return $http({
      method: 'GET',
      url: '/api/images/' + model
    }).then(function (response) {
      return response.data;
      // console.log(response.data)
    });
  };
}]);
'use strict';

angular.module("App").controller('homeCtrl', ["$scope", function ($scope) {
   $scope.test = 'homeCtrl works';

   $scope.showVehicles = false;
}]);
//# sourceMappingURL=bundle.js.map
