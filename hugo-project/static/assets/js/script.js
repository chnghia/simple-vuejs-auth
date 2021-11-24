var open = document.getElementById("btn-open");
var close = document.getElementById("btn-close");
var mobile = document.getElementById("mobile-nav");

open.addEventListener("click",() => {
  mobile.classList.remove("hidden");
});

close.addEventListener("click",() => {
  mobile.classList.add("hidden");
});