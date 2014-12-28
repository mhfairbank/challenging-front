// Original Specs. Copy lines 3-25 into the console all at once. Be sure to add a few items to your cart on colehaan.com and return to the homepage first.

var subtotal = $('.grid_6.value.omega').text();
var itemCount = $('.mini-cart-quantity').text();
var images = $('.mini-cart-image.alpha.grid_4 img');
var cartURL = $('.mini-cart-content > .grid_12 > a:first').attr('href');
var itemURLs = $('.mini-cart-name.grid_8 > a');

$('#main-wrapper').after('<div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModal" aria-hidden="true"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="myModalLabel">Cart Subtotal: ' + subtotal + '<br />Item Count: ' + itemCount + '</h4><h3>Cart Items: </h3></div><div class="modal-footer"><a type="button" class="button btn btn-primary" role="button" href="' + cartURL + '" target="_blank">View Cart</a><br /><br /><button type="button" class="btn btn-default" data-dismiss="modal" style="width: auto;">Close</button></div></div></div></div>');

for(var i = 0; i < images.size(); i++){
	$('#cartModal .modal-header h3').after(itemURLs[i]);
	$('#cartModal .modal-header a').first().text('');
	$('#cartModal .modal-header a').first().append(images[i]);
}

$('#cartModal .modal-header a').attr('target','_blank');
$('#cartModal .modal-header a').after(' ');

$(window).scroll(function(){
	var scrollRatio = ($(window).scrollTop() + $(window).height()) / $(document).height();
	if(scrollRatio >= 0.9){
		$('#cartModal').modal();
	}
});

// Only shows overlay when user is logged in. Doesn't use cookies. Copy lines 29-51 into the console all at once.

var subtotal = $('.grid_6.value.omega').text();
var itemCount = $('.mini-cart-quantity').text();
var images = $('.mini-cart-image.alpha.grid_4 img');
var cartURL = $('.mini-cart-content > .grid_12 > a:first').attr('href');
var itemURLs = $('.mini-cart-name.grid_8 > a');

$('#main-wrapper').after('<div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModal" aria-hidden="true"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="myModalLabel">Cart Subtotal: ' + subtotal + '<br />Item Count: ' + itemCount + '</h4><h3>Cart Items: </h3></div><div class="modal-footer"><a type="button" class="button btn btn-primary" role="button" href="' + cartURL + '" target="_blank">View Cart</a><br /><br /><button type="button" class="btn btn-default" data-dismiss="modal" style="width: auto;">Close</button></div></div></div></div>');

for(var i = 0; i < images.size(); i++){
	$('#cartModal .modal-header h3').after(itemURLs[i]);
	$('#cartModal .modal-header a').first().text('');
	$('#cartModal .modal-header a').first().append(images[i]);
}

$('#cartModal .modal-header a').attr('target','_blank');
$('#cartModal .modal-header a').after(' ');

$(window).scroll(function(){
	var scrollRatio = ($(window).scrollTop() + $(window).height()) / $(document).height();
	if(scrollRatio >= 0.9 && $('.my-account').size() > 0){
		$('#cartModal').modal();
	}
});