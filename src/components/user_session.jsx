var UserSession = (function(){
    var user_name = "";
    var password = "";
    var isAuthenticate = false;
    var levelSet = 0;

    var getUserName = function(){
        return user_name;
    };

    var getPassword = function(){
        return password
    };

    var getIsAuthenticated = function() {
        return isAuthenticate;
    };

    var getLevel = function(){
        return levelSet;
    }

    var setUsername = function(userName){
        user_name = userName;
    }

    var setPassword = function(password){
        password = password;
    }

    var setIsAuthenticate = function(authenticate) {
        isAuthenticate = authenticate;
    }

    var setLevel = function(level) {
        levelSet = level
    }

    // export functionality as object
    return {
        getUsername : getUserName,
        getPassword : getPassword,
        getIsAuthenticated : getIsAuthenticated,
        getLevel: getLevel,
        setUsername : setUsername,
        setPassword : setPassword,
        setIsAuthenticate : setIsAuthenticate,
        setLevel : setLevel,
    }
})();

export default UserSession;