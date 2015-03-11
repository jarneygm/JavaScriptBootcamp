(function () {
    movieApi = { "isValid": false };

    // get basic configuration from API
    $.ajax({
        "url": "http://api.themoviedb.org/3/configuration?api_key=070d248d81c80314c37280957276a5d4",
        "type": "GET",
        "async": false,
        "success": function (responseFromServer) {
            movieApi.configuration = responseFromServer;
            movieApi.isValid = true;
        }
    });

    movieApi.theMovieDBUri = "http://api.themoviedb.org/3/";
    movieApi.apiKey = "070d248d81c80314c37280957276a5d4";
    movieApi.upcomingMovies = movieApi.theMovieDBUri + "movie/upcoming";
    movieApi.nowPlaying = movieApi.theMovieDBUri + "movie/now_playing";
    movieApi.popularMovies = movieApi.theMovieDBUri + "movie/popular";
    movieApi.description = movieApi.theMovieDBUri + "movie/";
})();