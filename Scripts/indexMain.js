let WebsiteImage = document.querySelector('img')
let WebsiteButton = document.querySelector('button');
let WebsiteHeading = document.querySelector('h1');

WebsiteImage.onclick = function() {
    let WebsiteSrc = WebsiteImage.getAttribute('src');

    if(WebsiteSrc === 'images/monkey.jpg') { /*Retrieves current source of img. Checks if source is an image, if it is switch to other image on click */
        WebsiteImage.setAttribute('src', 'images/landscape.jpg')
    }
    else{
        WebsiteImage.setAttribute('src', 'images/monkey.jpg')
    }
}

function setUserName(){
    let WebsiteName = prompt('Please enter your name?');
    if(!WebsiteName){
        setUserName();
    }
    else{
    localStorage.setItem('name', WebsiteName);
    WebsiteHeading.textContent = 'Mozilla is cool, ' + WebsiteName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
}
else{
    let StoredName = localStorage.getItem('name');
    WebsiteHeading.textContent = 'Mozilla is cool, ' + StoredName;
}

WebsiteButton.onclick = function(){
    setUserName();
}


