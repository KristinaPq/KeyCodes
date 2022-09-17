document.addEventListener('keyup', function(event)
{
    const ke = document.querySelector('.k');
    const co = document.querySelector('.c');
    co.value = event.code;
    ke.value = event.key;
});
//События keydown и keyup
//Событие keydown происходит при нажатии клавиши, а keyup – при отпускании.
//лучше querySelector классы, а не id