angular.module("App").service('service300', function($http) {
  

  this.getCars = function(model) {
    return $http({
      method: 'GET',
      url: '/api/cars/' + model
    }).then(function(response){
      return response.data
      console.log(response.data)
    })

  }


  this.getImages = function(model) {
    return $http({
      method: 'GET',
      url: '/api/images/' + model
    }).then(function(response) {
      return response.data
      console.log(response.data)
    })

  }


})
