let renderCharacters = async () => {
    if (select1.value == 0 || select2.value == 0 || select1.value === select2.value) {
        outputCharacters.innerHTML = "";
        compareHolder.innerHTML = "";
        outputCharacters.innerHTML = `<div class="error-div"><h3>"Two different characters one must choose"</h3><br/>
        <img src="https://lumiere-a.akamaihd.net/v1/images/image_ba13b8fe.jpeg?region=0,0,1536,864" 
        alt="A picture of yoda" id="errorImg"/></div>`;
    } else {
        loadingLightsaber(outputCharacters);
        compareHolder.innerHTML = "";
        compareBtn.classList.add("hidden");
        firstMovieBtn.classList.add("hidden");
        let characterOneData = await getData(`${apiBase}people/${select1.value}/`);
        let characterTwoData = await getData(`${apiBase}people/${select2.value}/`);
        
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
            characterOneData.name.replace(/\s/g, "-"),
            characterOneData.homeworld,
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
            characterTwoData.name.replace(/\s/g, "-"),
            characterTwoData.homeworld,
        );

        characterArr.push(characterOne, characterTwo);
        // characterArr.push(characterTwo);

        characterArr.forEach((obj) => {
            let characterCard = document.createElement("div");
            characterCard.classList.add("character-card");
            characterCard.innerHTML = `
            <img src="../assets/photos/${obj.pictureURL}.png" alt="a picture of ${obj.name}" 
            style="height: 150px; width: 200px;"/><br/>
            <h3 style="text-align: center;">${obj.name}</h3>
            `;
            outputCharacters.append(characterCard);
        })

        showBottom();

        console.log(characterOne);
        console.log(characterTwo);
    }
}

//Button
showBtn.addEventListener("click", () => {
    compareHolder.innerHTML = "";
    differences.innerHTML = "";
    clearAll();
    messages.innerHTML = "Console...";
    renderCharacters();
});