var subtotal = $('.grid_6.value.omega').text();
var itemCount = $('.mini-cart-quantity').text();
var images = $('.mini-cart-image.alpha.grid_4 img');

$('#register-modal').after('<div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModal" aria-hidden="true"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="myModalLabel">Cart Subtotal: ' + subtotal + '<br />Item Count: ' + itemCount + '</h4></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-primary">View Cart</button> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>');

$(window).scroll(function(){
	var scrollRatio = ($(window).scrollTop() + $(window).height()) / $(document).height();
	if(scrollRatio >= 0.9){
		// show the modal
		$('#cartModal').modal();
	}
});