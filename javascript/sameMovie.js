
sameMovieBtn.addEventListener("click", async () => {
  differences.innerHTML = "";
  messages.innerHTML = "Loading..."

  let commonMovies = characterArr.reduce((obj, character) => {
    if (obj.length === 0) {
      return character.films;
     } else {
      return obj.filter(film => character.films.includes(film));
    }}, []);
  
  let commonMovieText;
  if (commonMovies.length === 0) {
    commonMovieText = document.createElement("p");
     commonMovieText.classList.add("common-movie-text");
    messages.innerHTML = `${characterArr[0].name} and ${characterArr[1].name} have not been featured in the same movie`;
    compareHolder.innerHTML = "";
  } else {
    commonMovieText = document.createElement("p");
    commonMovieText.classList.add("common-movie-text");
  }
  
  for (let obj of commonMovies) {
    let apiSameMovie = obj.slice(-8, -1);
    let sameMovieData = await getData(`${apiBase}${apiSameMovie}/`);
    compareHolder.innerHTML = "";
    messages.innerHTML = "Movies they have both been featured in: ";
    if (commonMovies.length > 0) {
      commonMovieText.innerHTML += `"${sameMovieData.title}", `;
      messages.append(commonMovieText);
    }
  }
});
  