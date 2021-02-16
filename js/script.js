var app = new Vue({
    el: '#root',
    data: {
        apiSearchSerie:'https://api.themoviedb.org/3/search/tv?api_key=043931550e7bb28220f2c004e08fa36e&query=',
        apiSearchMovie:'https://api.themoviedb.org/3/search/movie?api_key=043931550e7bb28220f2c004e08fa36e&query=',
        moviesDB:[],
        serieDB:[],
        generalDB:[],
        searchQuery:'',
        flagsImg:['it', 'en', 'us', 'fr', 'de', 'es'],
    },
    methods: {
       searchMovie: function () {
        const self = this;
        axios.get(self.apiSearchMovie + self.searchQuery)
            .then(function(resp) {
                console.log('movies ', resp.data.results);
                const movies = resp.data.results;
                self.moviesDB = movies;
                self.generalDB = [...self.generalDB,...movies];                
            });              
       },/* end searchMovies */

       searchSerie: function(){
        const self = this;
        axios.get(self.apiSearchSerie + self.searchQuery)
            .then(function(resp) {
                console.log('series ', resp.data.results);
                const series = resp.data.results;
                self.serieDB = series;
                self.generalDB = [...self.generalDB,...series];               
            });              
       },/* end searchSerie */

       ratingStar: function(element, index ) {
        const vote = Math.ceil(element.vote_average/2);
          if (index+1 <= vote) {
              return 'light-star'
          }          
       },/* end ratingStars */

    },
    mounted() {
        
    },
    
});

Vue.config.devtools = true;
