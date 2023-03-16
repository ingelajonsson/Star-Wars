homePlanetBtn.addEventListener("click", async () => {
    messages.innerHTML = "Loading...";
    differences.innerHTML = "";
    let planets = await characterArr[0].homePlanet(characterArr[1]); 
    messages.innerHTML = "";
    messages.append(planets);
})