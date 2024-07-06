//conditional
// let shoppingDone = false;
// let childsAllowance;

// if (shoppingDone) {  // We don't need to explicitly specify 'shoppingDone === true'
//   childsAllowance = 10;
// } else {
//   childsAllowance = 5;
// }

// let cheese = "Cheddar";

// if (cheese) {
//   console.log("Yay! Cheese available for making cheese on toast.");
// } else {
//   console.log("No cheese on toast for you today.");
// }

if (iceCreamVanOutside || houseStatus === "on fire") {
    console.log("You should leave the house quickly.");
  } else {
    console.log("Probably should just stay in then.");
  }
  
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
    console.log("Probably should just stay in then.");
} else {
    console.log("You should leave the house quickly.");
}
  

