$(document).ready(function () {

    //var apiConfiguration;

    //// get basic configuration from API
    //$.ajax({
    //    "url": "http://api.themoviedb.org/3/configuration?api_key=070d248d81c80314c37280957276a5d4",
    //    "type": "GET",
    //    "async": false,
    //    "success": function (responseFromServer) {
    //        apiConfiguration = responseFromServer;
    //    }
    //});

    // make sure you get the configuration from API
    if (!movieApi.isValid) return;

    //var theMovieDBUri = "http://api.themoviedb.org/3/";
    //var apiKey = "070d248d81c80314c37280957276a5d4";

    //// load popular movies
    //$.get("http://api.themoviedb.org/3/movie/popular?api_key=070d248d81c80314c37280957276a5d4",
    //    function (dataFromServer) {
    //        // walk throw all movies
    //        for (var key in dataFromServer.results) {
    //            // building the movies and add it to the DOM
    //            var template = "<div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-10 movie-gadget\">" +
    //                "<div class=\"row no-padder\">" +
    //                    "<a href=\"#\"><img class=\"img-gadget\" src=\"" + movieApi.configuration.images.base_url + movieApi.configuration.images.poster_sizes[3] + dataFromServer.results[key].poster_path + "\" /></a>" +
    //                "</div>" +
    //                "<div class=\"row gadget-content no-padder\">" +
    //                    "<label style=\"margin-top:10px\">" + dataFromServer.results[key].original_title + "</label>" +
    //                "</div></div>";
    //            $("#popularMovies").append(template);
    //        }
    //    });

    //$.get(theMovieDBUri + "movie/now_playing",
    //    { "api_key": apiKey },
    //    function (dataFromServer) {
    //        // walk throw all movies
    //        for (var i = 0; i < dataFromServer.results.length; i++) {
    //            // building the movies and add it to the DOM
    //            var movie = new Movie(dataFromServer.results[i], movieApi.configuration);
    //            $("#nowPlayingMovies").append(movie.template);
    //        }
    //    });

    //var getMovie = function (category, selector) {
    //    $.get(category,
    //    { "api_key": movieApi.apiKey },
    //    function (dataFromServer) {
    //        renderMovies(dataFromServer, selector);
    //    });
    //};

    var getMovie = function (category, selector) {
        $.get(category,
        { "api_key": movieApi.apiKey },
        function (dataFromServer) {
            // walk throw all movies
            for (var i = 0; i < dataFromServer.results.length; i++) {
                // building the movies and add it to the DOM
                var movie = new Movie(dataFromServer.results[i], movieApi.configuration);
                $(selector).append(movie.template);
            }
        });
    };

    getMovie(movieApi.upcomingMovies, "#upcomingMovies");
    //$.get(movieApi.upcomingMovies,
    //    { "api_key": movieApi.apiKey },
    //    function (dataFromServer) {
    //        renderMovies(dataFromServer, "#upcomingMovies");
    //    });

    getMovie(movieApi.nowPlaying, "#nowPlayingMovies");
    //$.get(movieApi.nowPlaying,
    //    { "api_key": movieApi.apiKey },
    //    function (dataFromServer) {
    //        renderMovies(dataFromServer, "#nowPlayingMovies");
    //    });

    getMovie(movieApi.popularMovies, "#popularMovies");
    //$.get(movieApi.popularMovies,
    //    { "api_key": movieApi.apiKey },
    //    function (dataFromServer) {
    //        renderMovies(dataFromServer, "#popularMovies");
    //    });

    //var renderMovies = function (dataFromServer, selector) {
    //    // walk throw all movies
    //    for (var i = 0; i < dataFromServer.results.length; i++) {
    //        // building the movies and add it to the DOM
    //        var movie = new Movie(dataFromServer.results[i], movieApi.configuration);
    //        $(selector).append(movie.template);
    //    }
    //};

    $(".popup").click(function (event) {
        event.preventDefault();
        alert($(this).data("movieid"));
        $("#myModal").show();
    })
});