// Variables and query selectors
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const showBtn = document.querySelector(".show-btn");
const outputCharacters = document.querySelector(".output-characters");
const compareHolder = document.querySelector(".compare-holder");
const compareBtn = document.querySelector(".compare-btn");
const firstMovieBtn = document.querySelector(".first-movie-btn");
const differences = document.querySelector(".differences");
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
    constructor(name, gender, height, mass, hairColor, skinColor, eyeColor, films = [], pictureUrl) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.mass = mass;
        this.hairColor = hairColor;
        this.skinColor = skinColor
        this.eyeColor = eyeColor;
        this.films = films;
        this.pictureUrl = pictureUrl;
    }
    async firstMovie() {
        let apiMovie = this.films[0].slice(-8, -1);
        let firstMovieData = await getData(`${apiBase}${apiMovie}/`);
        compareHolder.innerHTML = "";
        let firstMovieText = document.createElement("p");
        firstMovieText.classList.add("first-movie-text");
        firstMovieText.innerHTML = `${this.name} first appeared in episode ${firstMovieData.episode_id}, "${firstMovieData.title}" ${firstMovieData.release_date}`;
        return firstMovieText;
    }
}


//Buttons
compareBtn.addEventListener("click", () => {
    differences.innerHTML = "";
    compareCharacters();
});

showBtn.addEventListener("click", () => {
    differences.innerHTML = "";
    renderCharacters();
});


//Play audio
function play() {
    let audio = new Audio("/assets/song/Star_Wars_Main_Theme_Song.mp3");
    audio.play();
}
