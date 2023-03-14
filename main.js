// Variables and query selectors
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const showBtn = document.querySelector(".show-btn");
const outputCharacters = document.querySelector(".output-characters");
const compareHolder = document.querySelector(".compare-holder");
const compareBtn = document.querySelector(".compare-btn");
const differences = document.querySelector(".differences");
let characterArr = [];


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
}

// Get data
let getData = async (url) => {
    let data = await fetch(url);
    let json = await data.json();
    return json;
}

const apiBase = "https://swapi.dev/api/";


let renderCharacters = async () => {

    if (select1.value == 0 || select2.value == 0 || select1.value === select2.value) {
        outputCharacters.innerHTML = "";
        compareHolder.innerHTML = "";
        outputCharacters.innerHTML = `<div class="error-div"><h3>"Two different characters one must choose"</h3><br/>
        <img src="https://lumiere-a.akamaihd.net/v1/images/image_ba13b8fe.jpeg?region=0,0,1536,864" 
        alt="A picture of yoda" id="errorImg"/></div>`;
    } else {
        outputCharacters.innerHTML = `
        <img src="https://i.gifer.com/origin/51/51bface5a294c81b805eed7a5f830b7b_w200.gif" 
        alt="Loading gif of a spinning lightsaber" class="loading-img"/>`;

        compareHolder.innerHTML = "";
        compareBtn.classList.add("hidden");
        let characterOneData = await getData(`${apiBase}people/${select1.value}/`);
        let characterTwoData = await getData(`${apiBase}people/${select2.value}/`);
        compareBtn.classList.remove("hidden");
        outputCharacters.innerHTML = "";
        characterArr = [];

        let characterOne = new Character(
            characterOneData.name,
            characterOneData.gender,
            +characterOneData.height,
            +characterOneData.mass,
            characterOneData.hair_color,
            characterOneData.skin_color,
            characterOneData.eye_color,
            characterOneData.films.length,
            characterOneData.pictureUrl,
        );
        let characterTwo = new Character(
            characterTwoData.name,
            characterTwoData.gender,
            +characterTwoData.height,
            +characterTwoData.mass,
            characterTwoData.hair_color,
            characterTwoData.skin_color,
            characterTwoData.eye_color,
            characterTwoData.films.length,
            characterOneData.pictureUrl,
        );

        characterArr.push(characterOne);
        characterArr.push(characterTwo);

        characterArr.forEach((obj) => {
            let characterCard = document.createElement("div");
            characterCard.classList.add("character-card");
            characterCard.innerHTML = `
            <img src="../assets/photos/${obj.name.replace(/\s/g, "-")}.png" alt="a picture of ${obj.name}" 
            style="height: 150px; width: 200px;"/><br/>
            <h3 style="text-align: center;">${obj.name}</h3>
            `;
            outputCharacters.append(characterCard);
        })

        compareBtn.classList.remove("hidden");

        console.log(characterOne);
        console.log(characterTwo);
    }
}

let compareCharacters = async () => {
    compareHolder.innerHTML = "";

    characterArr.forEach((obj) => {

        let characterInfo = document.createElement("div");
        characterInfo.innerHTML = `
        Gender: ${obj.gender} <br/>
        Height: ${obj.height} cm<br/>
        Weight: ${obj.mass} kg<br/>
        Hair color: ${obj.hairColor} <br/>
        Skin color: ${obj.skinColor} <br/>
        Eye color: ${obj.eyeColor} <br/>
        Amount of movies featured in: ${obj.films}`;
        compareHolder.append(characterInfo);
    })
    // Jämförelser 
    let compared = document.createElement("div");
    compared.innerHTML = `<h2>Differences & similarities:</h2>`

    //Gender
    if (characterArr[0].gender === characterArr[1].gender) {
        let gender = document.createElement("p");
        gender.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} have the same gender`;
        compared.append(gender);
    } else {
        let gender = document.createElement("p");
        gender.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} do not have the same gender`;
        compared.append(gender);
    }

    //Height
    if (characterArr[0].height > characterArr[1].height) {
        let height = document.createElement("p");
        height.innerHTML = `${characterArr[0].name} is taller then ${characterArr[1].name}`;
        compared.append(height);
    } else if (characterArr[0].height < characterArr[1].height) {
        let height = document.createElement("p");
        height.innerHTML = `${characterArr[1].name} is taller then ${characterArr[0].name}`;
        compared.append(height);
    } else {
        let height = document.createElement("p");
        height.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} are equally tall`;
        compared.append(height);
    }
    differences.append(compared);

    //Weight
    if (characterArr[0].mass > characterArr[1].mass) {
        let weight = document.createElement("p");
        weight.innerHTML = `${characterArr[0].name} weighs more then ${characterArr[1].name}`;
        compared.append(weight);
    } else if (characterArr[0].mass < characterArr[1].mass) {
        let weight = document.createElement("p");
        weight.innerHTML = `${characterArr[1].name} weighs more then ${characterArr[0].name}`;
        compared.append(weight);
    } else {
        let info = document.createElement("p");
        info.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} weighs equally`;
        compared.append(info);
    }
    differences.append(compared);

    //Hair color
    if (characterArr[0].hairColor === characterArr[1].hairColor) {
        let hairColor = document.createElement("p");
        hairColor.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} have the same hair color`;
        compared.append(hairColor);
    } else {
        let hairColor = document.createElement("p");
        hairColor.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} do not have the same hair color`;
        compared.append(hairColor);
    }

    //Skin color
    if (characterArr[0].skinColor === characterArr[1].skinColor) {
        let skinColor = document.createElement("p");
        skinColor.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} have the same skin color`;
        compared.append(skinColor);
    } else {
        let skinColor = document.createElement("p");
        skinColor.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} do not have the same skin color`;
        compared.append(skinColor);
    }

    //Eye color
    if (characterArr[0].eyeColor === characterArr[1].eyeColor) {
        let eyeColor = document.createElement("p");
        eyeColor.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} have the same eye color`;
        compared.append(eyeColor);
    } else {
        let eyeColor = document.createElement("p");
        eyeColor.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} do not have the same eye color`;
        compared.append(eyeColor);
    }

    //Films
    if (characterArr[0].films > characterArr[1].films) {
        let films = document.createElement("p");
        films.innerHTML = `${characterArr[0].name} has been in more movies then ${characterArr[1].name}`;
        compared.append(films);
    } else if (characterArr[0].films < characterArr[1].films) {
        let films = document.createElement("p");
        films.innerHTML = `${characterArr[1].name} has been in more movies then ${characterArr[0].name}`;
        compared.append(films);
    } else {
        let films = document.createElement("p");
        films.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} has been in the same amout of movies`;
        compared.append(films);
    }
    differences.append(compared);
}

compareBtn.addEventListener("click", () => {
    differences.innerHTML = "";
    compareCharacters();
    audio.play();
})

showBtn.addEventListener("click", () => {
    differences.innerHTML = "";
    renderCharacters();
})

// function play() {
//     let audio = new Audio("/assets/song/Cantina_Theme_Song.mp3");
//     audio.play();
// }
function play() {
    let audio = new Audio("/assets/song/Star_Wars_Main_Theme_Song.mp3");
    audio.play();
}
// function stop() {
//     audio = "";
//     audio.stop();
//   }