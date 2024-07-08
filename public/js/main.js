(function ($) {
  "use strict";

  // Mobile Toggle Btn
  $(".navbar-toggle").on("click", function () {
    $("#header").toggleClass("nav-collapse");
  });
})(jQuery);

var mybutton = document.getElementById("scrollTopButton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
