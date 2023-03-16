vehicleBtn.addEventListener("click", () => {
    console.log("click")
})







// getExpensiveVehicle(character) {
//     let expensiveVehicle = null;
//     for(let i = 0; i < character.vehicles.length; i++) {
//         if(!expensiveVehicle || Number(character.vehicles[i].cost_in_credits) > Number(expensiveVehicle.cost_in_credits)) {
//             expensiveVehicle = character.vehicles[i];
//         }
//     }
//     for(let i = 0; i < character.starships.length; i++) {
//         if(!expensiveVehicle || Number(character.starships[i].cost_in_credits) > Number(expensiveVehicle.cost_in_credits)) {
//             expensiveVehicle = character.starships[i];
//         }
//     }
//     return expensiveVehicle.name;
// };