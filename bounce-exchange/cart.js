var subtotal = $('.grid_6.value.omega').text();
var itemCount = $('.mini-cart-quantity').text();
var images = $('.mini-cart-image.alpha.grid_4 img');
var cartURL = $('.mini-cart-total a').attr('href');
var itemURLs = $('.mini-cart-name.grid_8 > a');

$('#register-modal').after('<div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModal" aria-hidden="true"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="myModalLabel">Cart Subtotal: ' + subtotal + '<br />Item Count: ' + itemCount + '</h4><h3>Cart Items: </h3></div><div class="modal-footer"><a type="button" class="button btn btn-primary" role="button" href="' + cartURL + '">View Cart</a><br /><br /><button type="button" class="btn btn-default" data-dismiss="modal" style="width: auto;">Close</button></div></div></div></div>');

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