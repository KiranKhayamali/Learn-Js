const para = document.querySelector("p");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () =>{
    para.textContent = "Output :";
    const number = input.value;
    input.value - "";
    input.focus();
    for(let i =1; i<= number; i++){
        let sqRoot = Math.sqrt(i);
        if(Math.floor(sqRoot) != sqRoot){
            continue;
        }
        para.textContent +=`${i}`;
    }
});