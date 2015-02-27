        (function () {

            var config = {
                api_key : "070d248d81c80314c37280957276a5d4"
                };

                var App = angular.module("Movies.Controller",[]);

                App.controller('LoginApiCrtl',['$http',function($http){

                    $http.get('http://api.themoviedb.org/3/configuration',{params:{api_key:config.api_key}}).success(function(data){

                        console.log(data);

                    }).error(function(data){

                        console.log('was an error :' , data);

                    });

                }]);








        })();
