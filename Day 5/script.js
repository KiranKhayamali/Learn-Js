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

//concatenations
const one = "Good";
const two = "Morning";
const joined = `${one} ${two} ${name}`; //using template literals
console.log(joined);
console.log(one + " " + two + " " + name); //concatenating normal strings

const song = "oonko phool";
const score = 9.5;
const highestScore = 10;
const output = `I like the song "${song}". I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output);

//multi line strings
const newlineWithBacktik = `One day you finally knew
what you had to do, and began,`;
console.log(newlineWithBacktik);

const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

//concatenating number and string 
const test = "Front ";
const number = 39;
console.log(test + number);