let button=document.querySelector('.btn');
// console.log(button);

let text=document.querySelector('.text');
// console.log(text);

function reveal(){
    if(text.classList.contains('boxes')){
        text.classList.remove('boxes');
        button.innerHTML="click to reveal";
    }else{
        text.classList.add('boxes');
        button.innerHTML="clicked";
    }
}

button.addEventListener('click',reveal);