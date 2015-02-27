(function () {

    var App = angular.module("Movies.Partials",[]);

    App.directive('mainMenu',function(){
        return{
            restrict:'E',
            templateUrl:'App/views/menu.html'
        };

    });

    App.directive('mainContent', function () {

        return {
            restrict:'E',
            templateUrl:'App/views/dashboard.html'

        };

    });


})();

