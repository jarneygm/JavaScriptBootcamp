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

    App.directive('movieWidget', function () {

        return {

            restrict :'E',
            templateUrl:'App/views/moviewidget.html'

        };

    });

    App.directive('movieDetail',function(){

        return {

            restrict :'E',
            templateUrl:'App/views/moviedetail.html'

        };

    });


})();

