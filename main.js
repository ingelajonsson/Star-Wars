// Variables and query selectors
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const showBtn = document.querySelector(".show-btn");
const outputCharacters = document.querySelector(".output-characters");
const compareHolder = document.querySelector(".compare-holder");
// const test = document.querySelector(".");


class Character {
    constructor(name, gender, height, mass, hairColor, skinColor, eyeColor, movies = [], pictureUrl) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.mass = mass;
        this.hairColor = hairColor;
        this.skinColor = skinColor
        this.eyeColor = eyeColor;
        this.movies = movies;
        this.pictureUrl = pictureUrl;
    }
}


// Get data
let getData = async (url) => {
    let data = await fetch(url);
    let json = await data.json();
    return json;
}

const apiBase = "https://swapi.dev/api/";


let renderCharacters = async () => {

    if (select1.value == 0 || select2.value == 0) {
        outputCharacters.innerHTML = "";
        compareHolder.innerHTML ="";
        outputCharacters.innerHTML = `<div><h3>"Two characters one must choose"</h3><br/>
        <img src="https://lumiere-a.akamaihd.net/v1/images/image_ba13b8fe.jpeg?region=0,0,1536,864" alt="A picture of yoda" id="errorImg"/></div>`; 
        console.log("ERROR");
    } else {
        outputCharacters.innerHTML = `
        <img src="https://i.gifer.com/origin/51/51bface5a294c81b805eed7a5f830b7b_w200.gif" alt="Loading gif of a spinning lightsaber" class="loading-img"/>`;

        let characterOneData = await getData(`${apiBase}people/${select1.value}/`);
        let characterTwoData = await getData(`${apiBase}people/${select2.value}/`);
        outputCharacters.innerHTML = "";
        compareHolder.innerHTML ="";
        let characterArr = [];

        let characterOne = new Character(
            characterOneData.name,
            characterOneData.gender,
            characterOneData.height,
            characterOneData.mass,
            characterOneData.hair_color,
            characterOneData.skin_color,
            characterOneData.eye_color,
            characterOneData.movies,
            characterOneData.pictureUrl,
        );
        let characterTwo = new Character(
            characterTwoData.name,
            characterTwoData.gender,
            characterTwoData.height,
            characterTwoData.mass,
            characterTwoData.hair_color,
            characterTwoData.skin_color,
            characterTwoData.eye_color,
            characterTwoData.movies,
            characterOneData.pictureUrl,
        );

        characterArr.push(characterOne);
        characterArr.push(characterTwo);

        characterArr.forEach((obj) => {
            let characterCard = document.createElement("div");
            characterCard.classList.add("character-card");
            characterCard.innerHTML = `
            <img src="https://lumiere-a.akamaihd.net/v1/images/bb-8-main_72775463.jpeg?region=104%2C0%2C1072%2C536" alt="a picture of ${obj.name}" style="height: 150px;"/><br/>
            <h3 style="text-align: center;">${obj.name}</h3>
            `;
            outputCharacters.append(characterCard);
        })
        
        let compareBtn = document.createElement("button");
        compareBtn.innerText = "Compare characters";
        compareHolder.append(compareBtn);

        console.log(characterOne)
        console.log(characterTwo)
    }
}

let compareCharacters = async () => {

}

showBtn.addEventListener("click", () => {
    renderCharacters();
})







//             `Name: ${obj.name} <br/>
//             Gender: ${obj.gender} <br/>
//             Height: ${obj.height} cm<br/>
//             Mass: ${obj.mass} kg<br/>
//             Hair color: ${obj.hairColor} <br/>
//             Skin color: ${obj.skinColor} <br/>
//             Eye color: ${obj.eyeColor}`;


