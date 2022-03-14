var open = document.getElementById("btn-open");
var close = document.getElementById("btn-close");
var mobile = document.getElementById("mobile-nav");

document.head.innerHTML = document.head.innerHTML + "<base href='" + document.location.href + "' />";

open.addEventListener("click",() => {
  mobile.classList.remove("hidden");
});

close.addEventListener("click",() => {
  mobile.classList.add("hidden");
});