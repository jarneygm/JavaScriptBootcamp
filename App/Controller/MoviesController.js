            (function () {

                    var apiConfigPath = {};


                    var App = angular.module("Movies.Controller",[]);

                        App.controller('LoginApiCtrl',['ConfigApiService',function(ConfigApiService){
                             ConfigApiService.getConfigPath().then(function(data){

                                 if(data.isValid)
                                    apiConfigPath = data.data;
                            });

                         }]);

                        App.controller('MovieListCtrl',['$scope','MovieDiscover',function($scope,MovieDiscover){

                            var self = this;
                            self.mostRate = {};
                            self.upComingMovies = [];
                            self.nowPlayingMovies = {};
                            self.urlImag = '';
                            var rank = 0;
                            var movieId = null;
                             self.getListMovies  = function(){

                                 MovieDiscover.getUpcomingMovies().then(function(response){
                                     self.upComingMovies = response.results;

                                    getOutNullValue(self.upComingMovies);
                                    angular.forEach(self.upComingMovies,function(val,key){

                                            if(rank <= val.vote_average){
                                                movieId = val.id;
                                                rank = val.vote_average;
                                            }

                                     });

                                     console.log(self.upComingMovies);
                                     MovieDiscover.getMovieById(movieId).then(function(resp){

                                         resp.poster_path = apiConfigPath.images.base_url + apiConfigPath.images.poster_sizes[4] + resp.poster_path;
                                         self.mostRate = resp;
                                     });
                                     self.urlImag =  apiConfigPath.images.base_url + apiConfigPath.images.poster_sizes[1];

                                 });

                                /* MovieDiscover.getNowPlaying().then(function(response){
                                     self.nowPlayingMovies = response;

                                 });*/

                             };

                            function getOutNullValue(list){

                                angular.forEach(list,function(val,key){
                                    if(val.poster_path === null){
                                        list.splice(list.indexOf(key),1);
                                    }

                                });

                            }

                            self.getListMovies();






                        }]);







            })();
