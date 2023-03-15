let compareCharacters = () => {
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
        Amount of movies featured in: ${(obj.films).length}`;
        compareHolder.append(characterInfo);
    })
    
    // Jämförelser 
    let compared = document.createElement("div");
    compared.innerHTML = `<h2>Differences & similarities:</h2>`

    //Gender
    if (characterArr[0].gender === characterArr[1].gender) {
        let gender = document.createElement("p");
        gender.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} are the same gender`;
        compared.append(gender);
    } else {
        let gender = document.createElement("p");
        gender.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} are not the same gender`;
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