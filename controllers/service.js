angularApp.factory('UserService',function($timeout){
  var services = {
    // validateUser:function(username, password){
    //   const emailReg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //   var response = {success:username ==='admin@gmail.com' && password === 'admin@123'}

    //   if(!reg.test(username)){
    //     callback()
    //   }
    //   if(password.length < 6){
    //     return true
    //   }
    //   return false
    // },
    login:function(username, password, callback){
      $timeout(function(){
        
        var response = {}
        var emailReg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailReg.test(username)){
          response.message = 'Invalid email address'
          return callback(response)
        }

        if(password.length < 6){
          response.message = 'Password must contain at least 6 characters'
          return callback(response)
        }

        response.success = username ==='admin@gmail.com' && password === 'admin@123'
        if(!response.success){
          response.message = 'Invalid username and password'
        }
        callback(response)
      },1000)
    }
  }
  
  return services
})