        (function () {

                var apiConfigPath = {};
                var dashboardList = {
                    nowPlay:{},
                    upComing:{}
                };
                var App = angular.module("Movies.Controller",[]);

                    App.controller('LoginApiCtrl',['ConfigApiService',function(ConfigApiService){
                         ConfigApiService.getConfigPath().then(function(data){

                             if(data.isValid)
                                apiConfigPath = data.data;
                        });

                     }]);

                    App.controller('MovieListCtrl',['MovieDiscover',function(MovieDiscover){

                         MovieDiscover.getNowPlaying().then(function(data){
                             dashboardList.nowPlay = data.data;
                         });

                         MovieDiscover.getUpcomingMovies().then(function(data){
                             dashboardList.upComing = data.data;
                         });


                         console.log(dashboardList);

                    }]);







        })();
