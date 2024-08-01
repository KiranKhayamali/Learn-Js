//Loop
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
for (const cat of cats){
    console.log(cat);
}

//using map in array
function toUpper(string) {
    return string.toUpperCase();
} 
const upperCats = cats.map(toUpper);
console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
