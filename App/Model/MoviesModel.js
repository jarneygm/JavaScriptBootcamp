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
            nowPlaying :UrlBase.httpBaseApi + 'movie/now_playing'
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

            };

             var defer = $q.defer();

             // Private Method
             var discoverMovie = function(){

                 $http.get(ApiUrl.discoverMovie,{params:{api_key:config.api_key}}).success(Response).error(Error);
                 return defer.promise;
             };

             var  upComingMovies = function(){

                 $http.get(ApiUrl.upcomingMovies,{params:{api_key:config.api_key}}).success(Response).error(Error);
                 return defer.promise;

             };

             var nowPlayong = function(){

                 $http.get(ApiUrl.nowPlaying,{params:{api_key:config.api_key}}).success(Response).error(Error);
                 return defer.promise;
             };

             function Error(data){

                 modelData.errorMsg='Something Wrong happens';
                 modelData.data = data;
                 defer.reject(modelData);
             }

             function Response(data){

                 modelData.isValid = true;
                 modelData.data = data;
                 defer.resolve(modelData);
             }

            return {

                getMovieList: discoverMovie,
                getUpcomingMovies:upComingMovies,
                getNowPlaying : nowPlayong

            };

        }]);





    })();
