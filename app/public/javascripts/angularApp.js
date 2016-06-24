var app = angular.module('comercioApp',  ['ngRoute']);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello worc!';
}]);

app.controller('TodoController', ['$scope',function ($scope) {
    
  }]);
app.controller('AboutCtrl', ['$scope', function ($scope) {
    
  }]);
app.controller('ContactCtrl', ['$scope', function ($scope) {
    
}]);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/todos.html',
        controller: 'TodoController'
      })
      /*.when('/:id', {
        templateUrl: '/todoDetails.html',
        controller: 'TodoDetailCtrl'
     })*/
     .when('/about', {
        templateUrl: '/about.html',
        controller: 'AboutCtrl'
     })
     .when('/contact', {
        templateUrl: '/contact.html',
        controller: 'ContactCtrl'
     })
     ;
     
  }]);