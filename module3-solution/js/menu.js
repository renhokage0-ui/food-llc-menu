(function ($) {
  "use strict";

  $("#mobile-menu a").on("click", function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
      var $menu = $("#mobile-menu");
      if ($menu.hasClass("collapsing")) {
        $menu.one("shown.bs.collapse", function () {
          $menu.collapse("hide");
        });
      } else {
        $menu.collapse("hide");
      }
    }
  });
})(jQuery);
