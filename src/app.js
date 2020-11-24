import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            countries: [],
            selectedCountry: null,
            flag: null,
            favourites: [],
            favCountry: ""

        },
        mounted(){
            this.fetchCountries();
        },
        computed: {
            totalPopulation: function() {
                return this.countries.reduce( (sum, country) => {
                    return sum + country.population
                }, 0)
            }
        },
        methods: {
            fetchCountries: function() {
                fetch("https://restcountries.eu/rest/v2/all")
                .then(response => response.json())
                .then(data => this.countries = data)
            },
            // getFlag: function() {
            //     const result = this.country.filter((country) => {
            //         return country.name === this.selectedCountry;
            //     })
            //     return result.flag
            // }
            
            
            saveNewFavourite: function() {
                this.favourites.push(
                     this.selectedCountry
                )
                // this.favCountry = country.name
            }
        }
    })
    
})


