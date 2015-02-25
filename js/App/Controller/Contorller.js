
app = (function () {

    var Main;
    var config = {
        api_key : "070d248d81c80314c37280957276a5d4"
        };

    Main = function () {
        var App = angular.module('Movies', []);
        App.controller('movieList', function () {

        });

    };

    var init = function () {
        Main();

    };

    return {
        init: init

    }


})();
