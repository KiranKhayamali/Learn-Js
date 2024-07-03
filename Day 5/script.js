const string = "Hello I am Kiran Khayamali";
console.log(string);

const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`; //these are special strings here we can write js scripts as well as multi line strings
console.log(single);
console.log(double);
console.log(backtick);

//embedded js
const name = "Kiran";
const greeting = `Welcome Back ${name}!`;
console.log(greeting);

const one = "Good";
const two = "Morning";
const joined = `${one} ${two} ${name}`;
console.log(joined);
