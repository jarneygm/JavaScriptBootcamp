
var MoviesController = (function () {

    var Main;
    var config = {
        api_key : "070d248d81c80314c37280957276a5d4"
        };

    // Main Function que recive como parametro un objeto de angular
    Main = function (angularModule) {

        var App = angularModule;
        App.controller('MovController', function () {

             this.setAlert = function () {
                   alert("works the controller");
             };
        });

    };

    var init = function (Ang) {
        Main(Ang);

    };

    return {
        init: init

    }


})();
