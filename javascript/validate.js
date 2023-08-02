// alert("hello");
/*
function alphabet(){
    if (x=""){
        x.innerHTML="Fill the space";
    }
    else if (alpha<a || alpha>z){
        x.innerHTML="Invalid input";
    }else{
        x.innerHTML="correct !";
    }
}

function number(){
    if (y=""){
        y.innerHTML="Fill the space";
    }
    else if (isNaN(x)){
        y.innerHTML="Invalid input";
    }else{
        y.innerHTML="correct !";
    }
} */

let x= document.getElementById("textmsg");
let y= document.getElementById("numbermsg") ;

let alpha= document.getElementById("writeAlpha") ;
let num= document.getElementById("writeNum") ;

let form= document.getElementById("form");
let btn=document.getElementById("btn");

btn.onclick=(function (e) {
    if(form.length>0){e.previousDefault();};
    if (alpha=""){
        x.innerHTML="Fill the space";
    }
    else if (alpha<a || alpha>z){
        x.innerHTML="Invalid input";
    }else{
        x.innerHTML="correct !";
    };
    if (num=""){
        y.innerHTML="Fill the space";
    }
    else if (isNaN(num)){
        y.innerHTML="Invalid input";
    }else{
        y.innerHTML="correct !";
    };
}
);