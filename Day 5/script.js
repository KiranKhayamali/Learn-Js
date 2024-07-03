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

//using some bult-in methods
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
if (browserType.startsWith("zilla")) {
    console.log("Found zilla!");
} else {
    console.log("No zilla here!");
}
if (browserType.endsWith("zilla")) {
    console.log("Found zilla!");
} else {
    console.log("No zilla here!");
}

const tagline = "Resources for developers, by developers";
console.log(tagline.indexOf("developers")); //index of substring developers

const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);
console.log(firstOccurrence); 
console.log(secondOccurrence);

const browserTypeof = "mozilla";
const updated = browserTypeof.replace("moz", "van");

console.log(updated); 
console.log(browserTypeof);

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote);