(function () {
    var apiConfigPath = {};
    var App = angular.module("Movies.Controller", []);

    App.filter('trustedUrl', ['$sce', function ($sce) {

        return function (url) {
            return $sce.trustAsResourceUrl(url);
        };
    }]);

    App.controller('LoginApiCtrl', ['ConfigApiService', function (ConfigApiService) {
        ConfigApiService.getConfigPath().then(function (data) {

            if (data.isValid)
                apiConfigPath = data.data;
        });

    }]);

    App.controller('MovieListCtrl', ['$scope', 'MovieDiscover', function ($scope, MovieDiscover) {

        var self = this;
        self.mostRate = {},
        self.upComingMovies = [],
        self.detailMovie = {},
        self.nowPlayingMovies = [],
        self.popularMovie = [],
        self.movieCast = [],
        self.movieVideo = [],
        self.urlImag = '',
        self.ShowdetailMovie = false;

        self.getListMovies = function () {

            MovieDiscover.getUpcomingMovies().then(function (response) {

                self.upComingMovies = response.results;

                self.urlImag = apiConfigPath.images.base_url + apiConfigPath.images.poster_sizes[1];

            });

            MovieDiscover.getNowPlaying().then(function (response) {

                self.nowPlayingMovies = response.results;

            });

            MovieDiscover.getPopularMovies().then(function (response) {

                self.popularMovie = response.results;

            });

        };

        self.DetailMovie = function (Id) {

            MovieDiscover.getMovieById(Id).then(function (movieData) {

                movieData.poster_path = apiConfigPath.images.base_url + apiConfigPath.images.poster_sizes[3] + movieData.poster_path;
                self.detailMovie = movieData;
                self.ShowdetailMovie = true;

            });
            MovieDiscover.getMovieCast(Id).then(function (castData) {

                self.photo_path = apiConfigPath.images.base_url + apiConfigPath.images.profile_sizes[2];
                self.movieCast = castData;

            });

            MovieDiscover.getMovieVideos(Id).then(function (videoData) {

                self.movieVideo = videoData.results;
            });

        };

        self.goBack = function () {

            self.ShowdetailMovie = false;
        };

        self.VideoUrl = function (key) {

            return "http://www.youtube.com/embed/" + key;
        };

        self.getListMovies();
    }]);
})();
