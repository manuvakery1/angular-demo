var angularApp = angular.module('angularApp',['ngRoute','ngStorage'])
angularApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
  
  $routeProvider
  .when('/login', {
    controller:'LoginController',
    templateUrl : './views/login.html'
  })
  .when('/', {
      templateUrl : './views/home.html'
  })
  .otherwise({
    redirectTo:'/'
  })
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled:true,
    requireBase:false
  })
  
}]);
angularApp.run(['$rootScope','$location','$localStorage',function($rootScope,$location,$localStorage){
  $rootScope.$on('$locationChangeStart',function(event,next,current){
    if(!$localStorage.isLoggedIn){
        $location.path('/login')
    }
  })

}])
