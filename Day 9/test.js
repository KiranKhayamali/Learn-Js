//Teneray Operator or inline if else 
// const greeting = isBirthday
//   ? "Happy birthday Mrs. Smith — we hope you have a great day!"
//   : "Good morning Mrs. Smith.";

const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);
