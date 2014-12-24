var scrollPercentage;
$('#main').scroll(function(){
  debugger;
  console.log("worked");
});

$(window).scroll(function(){
	var scrollPercentage = $(window).scrollTop(); 
	console.log(scrollPercentage);
});

$(window).scrollTop()
$(window).height()
$(document).height()

($(window).scrollTop() + $(window).height()) / $(document).height()


$(window).scroll(function(){
	var scrollRatio = ($(window).scrollTop() + $(window).height()) / $(document).height();
	if(scrollRatio >= 0.9){
		console.log(scrollRatio);
	}
});


$(window).scroll(function(){
	var scrollRatio = ($(window).scrollTop() + $(window).height()) / $(document).height();
	if(scrollRatio >= 0.9){
		$('#cartModal').modal();
	}
});

$(window).scroll(function(){
	var scrollRatio = ($(window).scrollTop() + $(window).height()) / $(document).height();
	if(scrollRatio >= 0.9){
		$('#cartModal').modal();
	}
});

<div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        <h3>Modal Body</h3>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
		</div>
  </div>
</div>