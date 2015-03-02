        (function(){

            var config = {

                api_key : "070d248d81c80314c37280957276a5d4"

            };

            var UrlBase = {

                httpBaseApi:'http://api.themoviedb.org/3/'
            };

            var ApiUrl = {

                configuration : UrlBase.httpBaseApi + 'configuration',
                discoverMovie: UrlBase.httpBaseApi + 'discover/movie',
                upcomingMovies : UrlBase.httpBaseApi + 'movie/upcoming',
                nowPlaying :UrlBase.httpBaseApi + 'movie/now_playing',
                movieDescription: UrlBase.httpBaseApi + 'movie/'
            };

            var App = angular.module('Movies.Models',[]);


            App.factory('ConfigApiService',['$http','$q',function($http,$q){

                var configData = function(){
                    var configApi, def;
                    configApi = {};
                    def = $q.defer();
                    $http.get(ApiUrl.configuration,{params:{api_key:config.api_key}}).success(function(data){

                        configApi.isValid = true;
                        configApi.data = data;
                        def.resolve(configApi);

                    }).error(function(data){
                        def.reject(data);
                    });
                   return  def.promise;
                };
                return {
                    getConfigPath : configData
                };


            }]);

           App.factory('MovieDiscover',['$http','$q',function($http,$q){

                var modelData = {
                        isValid:false,
                        data:{},
                        errorMsg:''

                }, deferNowPlaying = $q.defer(),deferUpcoming = $q.defer();//deferDescription = $q.defer();


                 // Private Method
                 var discoverMovie = function(){

                     $http.get(ApiUrl.discoverMovie,{params:{api_key:config.api_key}}).success(ResponseUpComing).error(Error);
                     return deferUpcoming.promise;
                 };

                 var  upComingMovies = function(){

                     $http.get(ApiUrl.upcomingMovies,{params:{api_key:config.api_key}}).success(ResponseUpComing).error(Error);
                     return deferUpcoming.promise;

                 };

                 var nowPlaying = function(){

                     $http.get(ApiUrl.nowPlaying,{params:{api_key:config.api_key}}).success(ResponseNowPlaying).error(Error);
                     return deferNowPlaying.promise;
                 };

                 var movieDescription = function(movieId){
                      var deferDescription = $q.defer();
                      $http.get(ApiUrl.movieDescription + movieId,{params:{api_key:config.api_key}}).success(function(response){
                          deferDescription.resolve(response);

                      }).error(Error);
                      return deferDescription.promise;

                  };
                 function Error(data){

                     deferUpcoming.reject(data);
                 }

                 function ResponseUpComing(data){

                     deferUpcoming.resolve(data);
                 }


                  function ResponseNowPlaying(data){

                    deferNowPlaying.resolve(data);
                  }



                return {

                    getMovieList: discoverMovie,
                    getUpcomingMovies:upComingMovies,
                    getNowPlaying : nowPlaying,
                    getMovieById :movieDescription

                };

            }]);





        })();
