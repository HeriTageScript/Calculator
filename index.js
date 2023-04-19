let btn = document.querySelectorAll('.btn')
let screen = document.querySelector('.screen')
let clear = document.querySelector('.clear')
let equals = document.querySelector('.equals')
let backSpace = document.querySelector('.bS')


for(i of btn){
    (function (i){
        i.addEventListener('click', function(){
            screen.value = screen.value + i.innerHTML
        });
})(i)}
clear.addEventListener('click', function(){
    screen.value = ''
})
equals.addEventListener('click', function(){
    screen.value = eval(screen.value);
})
backSpace.addEventListener('click', function(){
    result = document.querySelector('.screen').value
    screen.value = screen.value.substr(0, result.length - 1 );
})

