const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () =>{ //change is used because of the select type ie option
    const choice = select.value;
    let days = 31;
    if (choice === "February"){
        days = 28;
    } else if  (choice === "April" ||choice === "June" ||choice === "September" ||choice === "November") {
        days = 30;
    }
    createCalender(choice, days);
})

function createCalender(choice, days){
    list.innerHTML="";
    h1.textContent = choice;
    for (let i = 1; i<=days; i++){
        const listItem = document.createElement("li");
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}
createCalender("January", 31);