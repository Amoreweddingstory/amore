function myFunction() {}
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
$(document).on("scroll", function () {
  if ($(document).scrollTop() > 100) {
    $("header").removeClass("large").addClass("small");
  } else {
    $("header").removeClass("small").addClass("large");
  }
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
