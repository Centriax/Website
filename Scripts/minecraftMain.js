let webIMG = document.querySelector('img');
let webHEADING = document.querySelector('h1');
let webBUTTON = document.querySelector('button');


webIMG.onclick = function(){
    webSRC = webIMG.getAttribute('src');
    if(webSRC === 'images/landscape.jpg'){
        webIMG.setAttribute('src', 'images/landscape2.jpg');
    }
    else{
        webIMG.setAttribute('src', 'images/landscape.jpg');
    }
}

function getUserName(){
    let webName = prompt('What is your name?');
    if(!webName){
        getUserName();
    }
    else{
        localStorage.setItem('name', webName);
        webHEADING.textContent = ("Hello " + webName);
    }
}

if(!localStorage.getItem('name')){
    getUserName();
}
else{
    let webNAME_1 = localStorage.getItem('name'); 
    webHEADING.textContent = ("Hello " + webNAME_1);
}

webBUTTON.onclick = function(){
    getUserName();
}
