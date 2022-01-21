var openbtn = document.querySelectorAll(".show-modal");
var modal = document.querySelector(".modal");
var closebtn = document.querySelector(".close-modal");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < openbtn.length; i++) {
  openbtn[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

function fun1() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
