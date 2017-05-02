$(document).scroll(function() {
    checkOffset();
});

function checkOffset() {
    if($('#list_aside').offset().top + $('#list_aside').height() 
                                           >= $('#main').offset().top + $('#main').height() ){
        $('#list_aside').css('margin-left', '0px');
        $('#list_aside').css('position', 'static');
    }
    if($(document).scrollTop() < $('#list_aside').offset().top - 110){
        $('#list_aside').css('margin-left', '5px');
        $('#list_aside').css('position', 'fixed'); // restore when you scroll up
    }
}