$('#mode').on('click', ()=>{
    if($('body').hasClass('dark')){
        $('body').removeClass('dark');
        $('header').addClass('bg-white');
        $('#side').addClass('bg-white');
        $('#categories').addClass('bg-ws');
        $('#categories2').addClass('bg-ws');

    } else {
        $('body').addClass('dark');
        $('header').removeClass('bg-white');
        $('#side').removeClass('bg-white');
        $('#categories').removeClass('bg-ws');
        $('#categories2').removeClass('bg-ws');
    }

    return false;
});

$('#side-bar').on('click',()=>{
    if($('#side').hasClass('side-bar-open')){
        $('#side').removeClass('side-bar-open');
    } else {
        $('#side').addClass('side-bar-open')
    }
});

$('#profile-nav').on('click',()=>{
    if($('#right-nav').hasClass('profile-nav-open')){
        $('#right-nav').removeClass('profile-nav-open');
    } else {
        $('#right-nav').addClass('profile-nav-open')
    }
});