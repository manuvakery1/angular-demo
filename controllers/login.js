angularApp.controller('LoginController',['$scope', '$location','$localStorage','UserService', function($scope,$location,$localStorage,UserService){
  $scope.init = function(){
    $scope.username = ''
    $scope.password = ''
    $scope.isDisabled = true
    $scope.isLoading = false
    $scope.errorMsg = ''
  }
  $scope.checkEmptyField = function(){
    if($scope.username && $scope.username.length > 0 &&  $scope.password && $scope.password.length > 0){
      $scope.isDisabled = false
    }else{
      $scope.isDisabled = true
    }
  }
  $scope.loginHandler = function(){
    $localStorage.isLoggedIn = false;
    $scope.isLoading = true
    UserService.login($scope.username,$scope.password,function(response){
      $scope.isLoading = false
      if(response.success){
        $localStorage.isLoggedIn = true;
        $location.path('/')
      }else{
        $scope.errorMsg = response.message
        $localStorage.isLoggedIn = false;
      }
    })
   
  }
  $scope.init()


}]);