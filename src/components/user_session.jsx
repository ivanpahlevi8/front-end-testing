var UserSession = (function(){
    var user_name = "";
    var password = "";
    var isAuthenticate = true;

    var getUserName = function(){
        return user_name;
    };

    var getPassword = function(){
        return password
    };

    var getIsAuthenticated = function() {
        return isAuthenticate;
    };

    var setUsername = function(userName){
        user_name = userName;
    }

    var setPassword = function(password){
        password = password;
    }

    var setIsAuthenticate = function(authenticate) {
        isAuthenticate = authenticate;
    }

    // export functionality as object
    return {
        getUsername : getUserName,
        getPassword : getPassword,
        getIsAuthenticated : getIsAuthenticated,
        setUsername : setUsername,
        setPassword : setPassword,
        setIsAuthenticate : setIsAuthenticate,
    }
})();

export default UserSession;