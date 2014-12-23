jQuery(function() {
  // #1 Solution
    jQuery('.dropdown, .1260').click(function(event){
      event.preventDefault();
      // event.stopPropagation();
      alert(this.firstChild.text);
    });

    jQuery('.navbar-nav li .dropdown-menu li').click(function(event){
      event.preventDefault();
      event.stopPropagation();
      alert(jQuery(this).parents('li')[0].firstChild.text + ": " + this.firstChild.text);
    });

  // #2 Solution
    // CSS solution: see maxymiser.css file

    // JQuery Solution
      // Hides "Stay Connected" and the social buttons
        // jQuery('.panels-flexible-region-site_footer-social-inside p').hide();

      // Just hides the social buttons
        jQuery('.panels-flexible-region-site_footer-social-inside a').hide();

  // #3 Solution
    jQuery('.home-logos-inside').parents('.max-white').insertBefore('.billboard.max-white');

});