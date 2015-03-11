function Movie(movieFromApi, apiConfiguration) {
    if (movieFromApi && movieFromApi.poster_path) {
        this.imgUrl = apiConfiguration.images.base_url + apiConfiguration.images.poster_sizes[3] + movieFromApi.poster_path;
        this.title = movieFromApi.original_title;
        this.id = movieFromApi.id;
        this.template = "<div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-10 movie-gadget\">" +
                            "<div class=\"row no-padder\">" +
                                "<a href=\"#\" class=\"popup\" data-movieid=\"" + this.id + "\"><img class=\"img-gadget\" src=\"" + this.imgUrl + "\"/></a>" +
                            "</div>" +
                            "<div class=\"row gadget-content no-padder\">" +
                                "<label style=\"margin-top:10px\">" + this.title + "</label>" +
                            "</div>" +
                        "</div>";
    }
};

function MovieDetails(movieFromApi, apiConfiguration) {
    Movie.call(this, movieFromApi, apiConfiguration);
    this.genres = $.map(movieFromApi.genres, function (item, index) {
        return item.name;
    });
    this.template = "<div>" +
                        "<div class=\"row banner no-padder\">" +
                            "<h3 class=\"title-detail\">" + this.title + " " + movieFromApi.release_date + "</h3>" +
                            "<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 no-padder\" style=\"padding-top: 30px;\">" +
                                "<a href=\"#\" class=\"thumbnail\">" +
                                    "<img class=\"img-banner\" src=\"" + this.imgUrl + "\" />" +
                                "</a>" +
                            "</div>" +
                            "<div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 movie-info-banner\">" +
                                "<h5 class=\"title-info-movie\">Movie Ifo</h5>" +
                                "<div class=\"clearfix\">" +
                                    "<label>Average Raiting: " + movieFromApi.vote_average + "</label>" +
                                "</div>" +
                                "<div class=\"clearfix\">" +
                                    "<label>Popularity: " + movieFromApi.popularity + "%</label>" +
                                "</div>" +
                                "<div class=\"clearfix\">" +
                                    "<label>Runtime: " + movieFromApi.runtime + " min</label>" +
                                "</div>" +
                                "<div class=\"clearfix\">" +
                                    "<label>Box Office: " + movieFromApi.revenue + "</label>" +
                                "</div>" +
                                "<div class=\"clearfix\">" +
                                    "<label>In Theaters: " + movieFromApi.release_date + "</label>" +
                                "</div>" +
                                "<div class=\"clearfix\">" +
                                    "<label>Status: " + movieFromApi.status + "</label>" +
                                "</div>" +
                                "<div class=\"clearfix\">" +
                                    "<label>Genre :</label>" +
                                    "<label style=\"margin-right: 3px;\">" +
                                        "<span>" + this.genres.join(', ') + "</span>" +
                                    "</label>" +
                                "</div>" +
                            "</div>" +
                            "<div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 movie-info-banner\">" +
                                "<h5 class=\"title-info-movie\">Overview</h5>" +
                                "<div class=\"clearfix\">" +
                                    "<label>" + movieFromApi.overview + "</label>" +
                                "</div>" +
                            "</div>" +
                        "</div>";
}
MovieDetails.prototype = new Movie();
MovieDetails.prototype.constructor = MovieDetails;