let more=document.querySelector('.more');
let dropdown=document.querySelector('.dropdown');

function drop(){
    if(dropdown.classList.contains('more')){
        dropdown.classList.remove('more');
    }
    else{
        dropdown.classList.add('more');
    }
}

more.addEventListener('click',drop);

let first=document.querySelector('.btn');

first.addEventListener('click',function(e){

    console.log(e.target.getAttribute('class') + '  is clicked');
})

