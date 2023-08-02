let quote = document.querySelector('.quote');
let person=document.querySelector('.person');
let button=document.querySelector('.btn');

let quotes=[
    {quote:`"All that glitters is not gold."`,person:"William Shakespeare"},{quote:`"Ask not what your country can do for you; ask what you can do for your country."`,person:"John Kennedy"},
{quote:`"Eighty percent of success is showing up."`,person:"Woody Allen"},
{quote:`"Genius is one percent inspiration and ninety-nine percent perspiration."`,person:"Thomas Edison"}]



button.addEventListener('click',function(){
    let x=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[x].quote;
    person.innerText='~ '+quotes[x].person;
})

let more=document.querySelector('.more');
let inner=document.querySelector('.inner');



 function drop(){
     if (inner.classList.contains('show')){
        inner.classList.remove('show')
     }else{
        inner.classList.add('show')
     }
 };

 more.addEventListener('click',drop)

// let i=1;
// while(i<=10){
//     console.log(Math.random()*20);
//     i++
// }


