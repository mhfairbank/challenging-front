jQuery('.dropdown, .1260, .navbar-nav li .dropdown-menu li').click(function(event){
  event.preventDefault();
  event.stopPropagation();
  alert(this.firstChild.text);
});