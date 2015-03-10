function Movie(movieFromApi, apiConfiguration) {
    this.imgUrl = apiConfiguration.images.base_url + apiConfiguration.images.poster_sizes[3] + movieFromApi.poster_path;
    this.title = dataFromServer.results[key].original_title;
};