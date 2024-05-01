let display = document.querySelector(".display");
let btn = document.querySelectorAll(".button");
console.log(btn);

display.addEventListener('onkeydown',(e)=>{
    console.log(e);
})
btn.forEach((element) => {
    
  element.addEventListener("click", (e) => {
    let value = e.target.value;

    if (value == "AC") {
      display.innerHTML = "";
    }
    else if (value == "=") {
      let equal_val = String(eval(display.innerHTML));
      if (equal_val.length > 8) {
        console.log("enrtedf if ");
        display.innerHTML = eval(display.innerHTML).toFixed(6);
      } else {
        display.innerHTML = eval(display.innerHTML);
      }
    } else if (value == "DE") {
      display.innerHTML = display.innerHTML.slice(0, -1);
    } else {
      display.innerHTML += value;
    }
  });
});
