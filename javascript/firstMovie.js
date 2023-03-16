firstMovieBtn.addEventListener("click", async () => {
    clearBottom();
    messages.innerHTML = "Loading..."
    let firstMovie1 = await characterArr[0].firstMovie(); 
    let firstMovie2 = await characterArr[1].firstMovie(); 
    messages.innerHTML = "";
    messages.append(firstMovie1, firstMovie2);
});