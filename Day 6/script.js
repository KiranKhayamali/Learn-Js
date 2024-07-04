//arrays
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);

const sequence = [1, 1, 2, 3, 5, 8, 13];

console.log(shopping.length); // checking length of shopping array
console.log(shopping[0]); //accessing array

shopping[0] = "rice";
console.log(shopping);

const random = ["tree", 795, [0, 1, 2]];
console.log(random[2][2]); // accessing multidimensional arrays ie. 2

const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //checking index of an item in array ie. 2

//adding items in array
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities);
cities.unshift("Edinburgh"); // add item in the begining of the array
console.log(cities);

//removing items in array
// cities.pop(); // removes last item from array
// console.log(cities);

// const removedCity = cities.pop();
// console.log(removedCity);

// cities.shift(); // removes first item from array
// console.log(cities)

const index = cities.indexOf("Liverpool");
// if (index !== -1) {
//   cities.splice(index, 1); // remove liverpool from the cities array
// }
// console.log(cities);

// if (index !== -1) {
//   cities.splice(index, 2); // remove liverpool and following item from cities array
// }
// console.log(cities);

