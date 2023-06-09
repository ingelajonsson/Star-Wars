// Variables and query selectors
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const showBtn = document.querySelector(".show-btn");
const outputCharacters = document.querySelector(".output-characters");
const compareHolder = document.querySelector(".compare-holder");
const compareBtn = document.querySelector(".compare-btn");
const firstMovieBtn = document.querySelector(".first-movie-btn");
const sameMovieBtn = document.querySelector(".same-movie-btn");
const homePlanetBtn = document.querySelector(".home-planet-btn");
const vehicleBtn = document.querySelector(".vehicle-btn");
const differences = document.querySelector(".differences");
const messages = document.querySelector(".messages");
let characterArr = [];

// Get data
let getData = async (url) => {
    let data = await fetch(url);
    let json = await data.json();
    return json;
}
const apiBase = "https://swapi.dev/api/";


//Class
class Character {
    constructor(name, gender, height, mass, hairColor, skinColor, eyeColor, films = [], pictureURL, homeworld, vehicles = [], starships = []) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.mass = mass;
        this.hairColor = hairColor;
        this.skinColor = skinColor
        this.eyeColor = eyeColor;
        this.films = films;
        this.pictureURL = pictureURL;
        this.homeworld = homeworld;
        this.vehicles = vehicles;
        this.starships = starships;
    }
    async firstMovie() {
        let apiMovie = this.films[0].slice(-8, -1);
        let firstMovieData = await getData(`${apiBase}${apiMovie}/`);
        compareHolder.innerHTML = "";
        let firstMovieText = document.createElement("p");
        firstMovieText.classList.add("first-movie-text");
        firstMovieText.innerHTML = `${this.name} first appeared in episode ${firstMovieData.episode_id}, "${firstMovieData.title}" ${firstMovieData.release_date}. `;
        return firstMovieText;
    }

    async homePlanet(other) {
        let apiNumPlanet1 = this.homeworld.slice(-3, -1).replace("/", "");
        let apiNumPlanet2 = other.homeworld.slice(-3, -1).replace("/", "");
        let planetData1 = await getData(`${apiBase}planets/${apiNumPlanet1}/`);
        let planetData2 = await getData(`${apiBase}planets/${apiNumPlanet2}/`);

        if (apiNumPlanet1 === apiNumPlanet2) {
            let planetText = `${this.name} and ${other.name} share the same home planet, ${planetData1.name}.`;
            return planetText;
        } else {
            let planetText = `${this.name} is from ${planetData1.name} and ${other.name} is from ${planetData2.name}.`;
            return planetText;
        }
    }

  async getMostExpensiveVehicle() {
    let maxPrice = 0;
    let mostExpensiveVehicle = 0;
    for (let i = 0; i < this.vehicles.length; i++) {
      const vehicleDetails = await getData(this.vehicles[i]);
      if (parseInt(vehicleDetails.cost_in_credits) > maxPrice) {
        maxPrice = parseInt(vehicleDetails.cost_in_credits);
        mostExpensiveVehicle = vehicleDetails;
      }
    }
    return mostExpensiveVehicle;
  }

async getMostExpensiveStarship() {
    let maxPrice = 0;
    let mostExpensiveStarship = 0;
    for (let i = 0; i < this.starships.length; i++) {
      const starshipDetails = await getData(this.starships[i]);
      if (parseInt(starshipDetails.cost_in_credits) > maxPrice) {
        maxPrice = parseInt(starshipDetails.cost_in_credits);
        mostExpensiveStarship = starshipDetails;
      }
    }
    return mostExpensiveStarship;
  }

}


//Clear the whole page
let clearAll = () => {
    sameMovieBtn.classList.add("hidden");
    homePlanetBtn.classList.add("hidden");
    vehicleBtn.classList.add("hidden");
    messages.classList.add("hidden");
}
//Remove the hidden class from the bottom part of the page
let showBottom = () => {
    messages.classList.remove("hidden");
    compareBtn.classList.remove("hidden");
    firstMovieBtn.classList.remove("hidden");
    sameMovieBtn.classList.remove("hidden");
    homePlanetBtn.classList.remove("hidden");
    vehicleBtn.classList.remove("hidden");
}
//Remove inner HTML from the compare button
let clearBottom = () => {
    differences.innerHTML = "";
    compareHolder.innerHTML = "";
}
//Loading gif
let loadingLightsaber = (obj) => {
    obj.innerHTML = `
        <img src="https://i.gifer.com/origin/51/51bface5a294c81b805eed7a5f830b7b_w200.gif" 
        alt="Loading gif of a spinning lightsaber" class="loading-img"/>`;
}
//Play audio
let play = () => {
    let audio = new Audio("../assets/song/Star_Wars_Main_Theme_Song.mp3");
    audio.play();
}
