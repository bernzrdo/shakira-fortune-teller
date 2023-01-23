
$('.action').on('click', function(){
    if($('.possibility').val() != '' && $('.subject').val() != ''){
        $('.intro, .result').hide();
        $('.loading').show();
        var loading = 0;
        var id = setInterval(function(){
            loading++;
            $('.loading .big-text').text(loading+'%');
            if(loading >= 100){
                clearInterval(id);
                $('.loading').hide();
                $('.result').show();
                $('.shakira-result p').text(Math.floor(Math.random() * 101)+'%');
            }
        },50);
        var audio = new Audio('yelling.mp3');
        audio.play();
    } else {
        $('dialog')[0].showModal();
    }
});

$('dialog button').on('click', function(){
    $('dialog')[0].close();
});