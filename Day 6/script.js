//arrays
// const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
// console.log(shopping);

// const sequence = [1, 1, 2, 3, 5, 8, 13];

// console.log(shopping.length); // checking length of shopping array
// console.log(shopping[0]); //accessing array

// shopping[0] = "rice";
// console.log(shopping);

// const random = ["tree", 795, [0, 1, 2]];
// console.log(random[2][2]); // accessing multidimensional arrays ie. 2

// const birds = ["Parrot", "Falcon", "Owl"];
// console.log(birds.indexOf("Owl")); //checking index of an item in array ie. 2

// //adding items in array
// const cities = ["Manchester", "Liverpool"];
// cities.push("Cardiff");
// console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
// cities.push("Bradford", "Brighton");
// console.log(cities);
// cities.unshift("Edinburgh"); // add item in the begining of the array
// console.log(cities);

//removing items in array
// cities.pop(); // removes last item from array
// console.log(cities);

// const removedCity = cities.pop();
// console.log(removedCity);

// cities.shift(); // removes first item from array
// console.log(cities)

// const index = cities.indexOf("Liverpool");
// if (index !== -1) {
//   cities.splice(index, 1); // remove liverpool from the cities array
// }
// console.log(cities);

// if (index !== -1) {
//   cities.splice(index, 2); // remove liverpool and following item from cities array
// }
// console.log(cities);

// Accessing items from array
// const birdGroup = ["Parrot", "Falcon", "Owl"];

// for (const bird of birdGroup) {
//   console.log(bird);
// }

// function double (number){
//     return number * 2;
// }
// const numbers = [1, 3, 7, 9];
// const doubled = numbers.map(double); // all items of numbers array are doubled
// console.log(doubled);

// function isEven(number){
//     return number%2 === 0; // items are returnwed only if condtion is satisfied
// }
// const digits = [1,2,3,4,5,6,7,8,9];
// const even = digits.filter(isEven);
// console.log(even);

// //converting string into array and vice versa
// const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
// const cities = data.split(","); // string to array
// const commaSeparated = cities.join(","); //array to string

// const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
// dogNames.toString(); // array to string