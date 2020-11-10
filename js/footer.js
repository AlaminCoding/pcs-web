var footerBox = document.querySelectorAll(".footer-box");
console.log(footerBox);
footerBox.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("expand-box");
    element.classList.toggle("caret-down");
  });
});
