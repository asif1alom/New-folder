let display = document.querySelector(".display");

let btn = document.querySelectorAll(".btn");
let equal = document.querySelector(".equal");
let ac = document.querySelector(".ac");
let de = document.querySelector(".de");




display.value = "";

btn.forEach(function (i) {
  i.addEventListener('click', function() {
      display.value += i.value;
  });
});

equal.addEventListener("click", () => {
    display.value=eval(display.value);
})
ac.addEventListener("click", () => {
    display.value = "";
})
de.addEventListener("click", () => {
    display.value=display.value.toString().slice(0, -1);
   
})