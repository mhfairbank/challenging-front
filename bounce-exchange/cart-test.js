var siteString = $("html").html();
siteString.match(/regexHere/g);




"__olapicU=1419372932173; __utma=54652333.89895437.1419372714.1419372714.1419372714.1; __utmz=54652333.1419372714.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __sonar=11456480125256562132; ColeHaanNewsletterVisits=2; ColeHaanNewsletterSession=0; ga_vc=1; ga_login_sent=true; _gat=1; sid=FF_3UdgYS1SALdRI2Y854RUI2v7iWaOhBvA; dwanonymous_29c8bd709bce117811b14d53deb17581=acH88lcyIsLdaerGhREFQOSo7w; dwac_bct8giaagE38Yaaac663BfOTDo=FF_3UdgYS1SALdRI2Y854RUI2v7iWaOhBvA%3D|dw-only|||USD|false|America%2FNew%5FYork|true; tradeGlobalGeolocation=US; _gat_OlapicGoogleTracker=1; shoefitrUserId=o7MIGwEkS0SWDmdo3-4TBw2; _gali=sticky-header; mt.v=2.1840100747.1419373135610; dw=1; tmseen=1; __atuvc=186%7C52; __atuvs=549b019a25e13cc5081; __utma=161561134.1509080451.1419373138.1419441769.1419444635.4; __utmb=161561134.0.10.1419457322942; __utmc=161561134; __utmz=161561134.1419373138.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); smtrrmkr=635550541228953699%5E6da3ccae-f18a-e411-83a0-0a18bbb287c2%5Ee330aac6-a78b-e411-967c-0afd435a375a%5E0%5E; smtrsession=popupcheck%7C3%5E-SR-%7C!; ga_session=1419457323286; ga_registered_user=yes; ga_logged_in=yes; ga_purchaser_type=browser; _ga=GA1.2.1509080451.1419373138; __CT_Data=gpv=141&apv_12613_www07=141; WRUID=0"


"__olapicU=1419372932173; __utma=54652333.89895437.1419372714.1419372714.1419372714.1; __utmz=54652333.1419372714.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __sonar=11456480125256562132; ColeHaanNewsletterVisits=2; ColeHaanNewsletterSession=0; ga_vc=1; ga_login_sent=true; _gat=1; _gat_OlapicGoogleTracker=1; shoefitrUserId=o7MIGwEkS0SWDmdo3-4TBw2; __utma=161561134.1509080451.1419373138.1419441769.1419444635.4; __utmb=161561134.0.10.1419457322942; __utmc=161561134; __utmz=161561134.1419373138.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); sid=gt-PNtFblsWYqSpW3t8SVu7Lm0i8aYCr9cE; dwanonymous_29c8bd709bce117811b14d53deb17581=ab0Wye3N7vLRyOH0sLhkuvwUi3; tradeGlobalGeolocation=US; loginClick=login; _gali=dwfrm_login; dwac_bct8giaagE38Yaaac663BfOTDo=gt-PNtFblsWYqSpW3t8SVu7Lm0i8aYCr9cE%3D|dw-only|00521235||USD|false|America%2FNew%5FYork|true; tmseen=1; mt.v=2.1840100747.1419373135610; dw=1; __atuvc=190%7C52; __atuvs=549b019a25e13cc5085; ga_session=1419457411682; ga_registered_user=yes; ga_logged_in=yes; ga_purchaser_type=browser; smtrrmkr=635550542116713564%5E6da3ccae-f18a-e411-83a0-0a18bbb287c2%5Ee330aac6-a78b-e411-967c-0afd435a375a%5E0%5E; smtrsession=popupcheck%7C3%5E-SR-%7C!; _ga=GA1.2.1509080451.1419373138; __CT_Data=gpv=144&apv_12613_www07=144; WRUID=0"

$('.mini-cart-total a')

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