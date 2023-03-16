vehicleBtn.addEventListener("click", async () => {
    messages.innerHTML = "Loading...";

    let expensiveStarship1 = await characterArr[0].getMostExpensiveStarship();
    let expensiveVehicle1 = await characterArr[0].getMostExpensiveVehicle();

    let expensiveStarship2 = await characterArr[1].getMostExpensiveStarship();
    let expensiveVehicle2 = await characterArr[1].getMostExpensiveVehicle();

    if (+expensiveStarship1.cost_in_credits > +expensiveVehicle1.cost_in_credits) {
        messages. innerHTML = `${characterArr[0].name}'s most expensive starship is a "${expensiveStarship1.name}" and costs ${+expensiveStarship1.cost_in_credits} credits, and `;
    } else if (+expensiveStarship1.cost_in_credits < +expensiveVehicle1.cost_in_credits) {
        messages. innerHTML = `${characterArr[0].name}'s most expensive vehicle is a "${expensiveVehicle1.name}" and costs ${+expensiveVehicle1.cost_in_credits} credits, and `;
    } else if (+expensiveStarship1 === 0 && +expensiveVehicle1 === 0){
        messages.innerHTML = `${characterArr[0].name} have no legally registered vehicles. `;
    }else {
        messages.innerHTML = "Error... ";
    }

    if (+expensiveStarship2.cost_in_credits > +expensiveVehicle2.cost_in_credits) {
        messages. innerHTML += `${characterArr[1].name}'s most expensive starship is a "${expensiveStarship2.name}" and costs ${+expensiveStarship2.cost_in_credits} credits`;
    } else if (+expensiveStarship2.cost_in_credits < +expensiveVehicle2.cost_in_credits) {
        messages. innerHTML += `${characterArr[1].name}'s most expensive vehicle is a "${expensiveVehicle2.name}" and costs ${+expensiveVehicle2.cost_in_credits} credits`;
    } else if (+expensiveStarship2 === 0 && +expensiveVehicle2 === 0){
        messages.innerHTML += `${characterArr[1].name} have no legally registered vehicles. `;
    }else {
        messages.innerHTML += "Error...";
    }

    console.log("done");
})


// if(mostExpensiveStarship > mostExpensiveVehicle){
//     console.log(mostExpensiveStarship);
//   } else if (mostExpensiveStarship < mostExpensiveVehicle){
//       console.log(mostExpensiveVehicle);
//   }else{
//       console.log("ERROR");
//   }
