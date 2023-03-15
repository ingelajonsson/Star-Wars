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
        firstMovieBtn.classList.add("hidden");
        let characterOneData = await getData(`${apiBase}people/${select1.value}/`);
        let characterTwoData = await getData(`${apiBase}people/${select2.value}/`);
        compareBtn.classList.remove("hidden");
        firstMovieBtn.classList.remove("hidden");
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
            characterOneData.films,
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
            characterTwoData.films,
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