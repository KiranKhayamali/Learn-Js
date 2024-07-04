const list = document.querySelector(".output ul"); // for listing the search history in website
const searchInput = document.querySelector(".output input"); // getting input search data
const searchButton = document.querySelector(".output button"); // button for search

list.innerHTML = "";
let myHistory = []; 
const MAX_HISTORY = 5;

searchButton.onclick = () =>{
    if (searchInput !== ""){
        myHistory.unshift(searchInput.value); // using unshift to push item at the begining and searchInput.value to show value
   
    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
        list.innerHTML = "";

        for (const input of myHistory){
            const listItem = document.createElement("li"); // create a list type element
            listItem.textContent = input;
            list.appendChild(listItem);
        }

        if (myHistory.length >= MAX_HISTORY){
            myHistory.pop();
        } 

        searchInput.value = ""; // the textspace in website is clear for new input
        searchInput.focus(); //focus the textspace
    }
}