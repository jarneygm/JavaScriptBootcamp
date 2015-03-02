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
                            self.detailMovie = {};
                            self.nowPlayingMovies = [];
                            self.urlImag = '';
                            self.ShowdetailMovie = false;
                            var rank = 0;
                            var movieId = null;
                             self.getListMovies  = function(){

                                 MovieDiscover.getUpcomingMovies().then(function(response){

                                    self.upComingMovies = response.results;

                                    angular.forEach(self.upComingMovies,function(val,key){

                                            if(rank <= val.vote_average){
                                                movieId = val.id;
                                                rank = val.vote_average;
                                            }

                                     });

                                     MovieDiscover.getMovieById(movieId).then(function(resp){

                                         resp.poster_path = apiConfigPath.images.base_url + apiConfigPath.images.poster_sizes[3] + resp.poster_path;
                                         self.mostRate = resp;
                                     });
                                     self.urlImag =  apiConfigPath.images.base_url + apiConfigPath.images.poster_sizes[1];

                                 });

                                 MovieDiscover.getNowPlaying().then(function(response){

                                     self.nowPlayingMovies = response.results;

                                 });

                             };


                            self.DetailMovie = function (Id) {

                                MovieDiscover.getMovieById(Id).then(function(movieData){
                                    movieData.poster_path = apiConfigPath.images.base_url + apiConfigPath.images.poster_sizes[3] + movieData.poster_path;
                                    self.detailMovie = movieData;
                                    console.log(self.detailMovie);
                                    self.ShowdetailMovie = true;

                                });

                            };

                            self.goBack = function(){

                                self.ShowdetailMovie = false;


                            };

                            self.getListMovies();







                        }]);







            })();
