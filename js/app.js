$(document).ready(function () {

    var apiConfiguration;

    // get basic configuration from API
    $.ajax({
        "url": "http://api.themoviedb.org/3/configuration?api_key=070d248d81c80314c37280957276a5d4",
        "type": "GET",
        "async": false,
        "success": function (responseFromServer) {
            apiConfiguration = responseFromServer;
        }
    });

    // make sure you get the configuration from API
    if (!apiConfiguration) return;

    var theMovieDBUri = "http://api.themoviedb.org/3/";
    var apiKey = "070d248d81c80314c37280957276a5d4";

    // load popular movies
    $.get(theMovieDBUri + "movie/popular",
        { "api_key": apiKey },
        function (dataFromServer) {
            // we decide here what to do with the data
            for (var key in dataFromServer.results) {
                var template = "<div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-10 movie-gadget\">" +
                    "<div class=\"row no-padder\">" +
                        "<a href=\"#\"><img class=\"img-gadget\" src=\"" + apiConfiguration.images.base_url + apiConfiguration.images.poster_sizes[3] + dataFromServer.results[key].poster_path + "\" /></a>" +
                    "</div>" +
                    "<div class=\"row gadget-content no-padder\">" +
                        "<label style=\"margin-top:10px\">" + dataFromServer.results[key].original_title + "</label>" +
                    "</div></div>";
                $("#popularMovies").append(template);
            }
        });
});