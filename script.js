$(document).ready(function () {
    $('button').click(function (){
        if($('body').hasClass('black')) {
            $('body').removeClass('black').addClass('white');
        }
        else{
            $('body').removeClass('white').addClass('black');
        }
    });    
});

if ($('#sky').hasClass('day')) {
    $('#sky').removeClass('day').addClass('night');
}
else {
    $('#sky').removeClass('night').addClass('day');
}

if ($('#moonspot1').hasClass('visible')) {
    $('#moonspot1').removeClass('visible');
} else {
    $('#moonspot1').addClass('visible');
}