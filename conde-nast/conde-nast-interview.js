var SQUARE_COUNT = 25;

(function () {
    var addOn = "";
    for (var i = 0; i < SQUARE_COUNT; i++) { 
        addOn += '<div class="square"></div>';        
    }
    // console.log(addOn);
    $('.container').append(addOn);
    
    $('.container').on('click', '.square', function(){
        $('.square').removeClass('clicked');
        $(this).addClass('clicked');
    });
})();

.container {
    border: 1px dotted #000000;
}
.square {
    height: 50px;
    width: 50px;
    border: 2px solid black;
    background: red;
    float: left;
}

.clicked{
    background: green;
}

<div class="container"></div>