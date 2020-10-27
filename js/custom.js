$(document).ready(function () {
  var $tabs = $("#horizontalTab");
  $tabs.responsiveTabs({
    startCollapsed: "accordion",
    collapsible: "accordion",
  });
});

// const arrow = document.querySelectorAll(".down-arrow-img");
// arrow.forEach((element, index) => {
//   console.log(element);
//   element.addEventListener("click", function () {
//     element.style.display = "none";
//   });
// });
// console.log(arrow);
new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 2,
  breakpoints: {
    800: {
      perView: 1,
    },
  },
}).mount();
new Glide(".about-glide", {
  type: "carousel",
  perView: 6,
  gap: 20,
  breakpoints: {
    800: {
      perView: 3,
    },
  },
}).mount();
