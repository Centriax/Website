let webIMG = document.querySelector('img');
let webBUTTON = document.querySelector('button');
let webP = document.querySelector('#name');


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
        localStorage.setItem('name_1', webName);
       webP.textContent = ("Hello " + webName);
    }
}

if(!localStorage.getItem('name')){
    getUserName();
}
else{
    let webNAME_1 = localStorage.getItem('name_1'); 
    webP.textContent = ("Hello " + webNAME_1);
}

window.onload = function(){
    webBUTTON.onclick = function(){
        getUserName();
        console.log('Wow!');
    }
};
