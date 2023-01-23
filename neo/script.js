
let $possibility = $('.possibility');
let $subject = $('.subject');
let audio = new Audio('assets/yelling.mp3');

$possibility.on('keydown', e=>{
    if(e.key == 'Enter') $subject.focus();
});

$subject.on('keydown', e=>{
    if(e.key == 'Enter') $('.action').click();
});

$('.action').on('click', ()=>{

    if(
        $possibility.val() == '' ||
        $subject.val() == ''
    ) return $('.error').slideDown();

    $('.intro, .error, .action, .result').slideUp();

    $('.predictions input').prop('disabled', true);

    $('.loading').slideDown();

    audio.currentTime = 0;
    audio.play();
    
    $({ n: 0 }).animate({ n: 100 }, {
        duration: audio.duration * 1e3,
        queue: false,
        step: n=>$('.loading .progress').text(Math.floor(n) + '%'),
        complete: ()=>{
            $('.loading .progress').text('100%');
            setTimeout(result, 1e3);
        }
    });


});

$('.error i').on('click', ()=>$('.error').slideUp());

function result(){

    $('.loading').slideUp();

    let str = $possibility.val() + $subject.val();
    str = str.toLowerCase().trim();

    let sum = 0;

    for(let c of $possibility.val() + $subject.val()){
        sum += c.charCodeAt(0);
    }

    let prediction = sum % 100;

    $('.predictions input').prop('disabled', false);
    $('.action, .result').slideDown();

    $({ n: 0 }).animate({ n: prediction }, {
        duration: 1e3,
        queue: false,
        step: n=>$('.result span').text(Math.floor(n) + '%'),
        complete: ()=>$('.result span').text(prediction + '%')
    });

}