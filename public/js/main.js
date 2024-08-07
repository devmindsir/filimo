$("#Hamburger").click(function () {
  $(".header__content-right").animate(
    {
      right: 0,
    },
    500
  );
  $("html").css("overflow", "hidden");
});

$("#Close").click(function () {
  $(".header__content-right").animate(
    {
      right: "-100rem",
    },
    500
  );
  $("html").css("overflow", "auto");
});
