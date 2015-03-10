function Movie(movieFromApi, apiConfiguration) {
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
};