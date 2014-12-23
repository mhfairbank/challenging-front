var subtotal = $('.grid_6.value.omega').text();

var itemCount = $('.mini-cart-quantity').text();

var images = $('.mini-cart-image.alpha.grid_4 img');


 $(function () {
  $("#dialog").dialog($.extend({}, dialogOptions, {
    autoOpen: false,
    width: 500,
    modal: true,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "fade",
      duration: 1000
    }
  }));

  $("#profile_edit").click(function () {
    $("#dialog").dialog("open");
  });

  $("#save_and_close").click(function () {
    $("#dialog").dialog("close");
  });
 });