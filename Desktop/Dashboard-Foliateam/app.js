// Bouton fermeture ouverture category

$(".fermeture").click(function() {
  $(".c1-2").toggle();
  $(".c2-3").toggle(1000);
  $(".c3-4").toggle(1000);
  $(".c5-6").toggle(1000);
});
// Category 1

$(".box-1").click(function() {
  $(".texte").toggle(
    function() {
      $(".c1-2").css({ display: block });
    },
    function() {
      $("html, body").animate(
        {
          scrollTop: $(".c1-2").offset().top - 130
        },
        400
      );
    }
  );
});

// Category 2

$(".box-2").click(function() {
  $(".back").toggle(
    function() {
      $(".c1-2").css({ display: block });
    },
    function() {
      $("html, body").animate(
        {
          scrollTop: $(".c1-2").offset().top - 130
        },
        400
      );
    }
  );
});

// Category 3

$(".box-3").click(function() {
  $(".support").toggle(
    function() {
      $(".c3-4").css({ display: block });
    },
    function() {
      $("html, body").animate(
        {
          scrollTop: $(".c3-4").offset().top
        },
        400
      );
    }
  );
});

// Category 4

$(".box-4").click(function() {
  $(".technicien").toggle(
    function() {
      $(".c3-4").css({ display: block });
    },
    function() {
      $("html, body").animate(
        {
          scrollTop: $(".c3-4").offset().top
        },
        400
      );
    }
  );
});

// Category 5

$(".box-5").click(function() {
  $(".anonyme").toggle(
    function() {
      $(".c5-6").css({ display: block });
    },
    function() {
      $("html, body").animate(
        {
          scrollTop: $(".c5-6").offset().top
        },
        400
      );
    }
  );
});

// Category 6

$(".box-6").click(function() {
  $(".mitel").toggle(
    function() {
      $(".c5-6").css({ display: block });
    },
    function() {
      $("html, body").animate(
        {
          scrollTop: $(".c5-6").offset().top
        },
        400
      );
    }
  );
});

// Back to top

var btn = $("#button");

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
