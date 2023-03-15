firstMovieBtn.addEventListener("click", async () => {
    differences.innerHTML = "";
    compareHolder.innerHTML = `
        <img src="https://i.gifer.com/origin/51/51bface5a294c81b805eed7a5f830b7b_w200.gif" 
        alt="Loading gif of a spinning lightsaber" class="second loading-img"/>`;
    
    
    let firstMovie1 = await characterArr[0].firstMovie(); 
    let firstMovie2 = await characterArr[1].firstMovie(); 
    compareHolder.append(firstMovie1, firstMovie2);
});