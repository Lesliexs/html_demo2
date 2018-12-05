var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/皮卡丘.jpg') {
      myImage.setAttribute('src', 'images/悟空.jpg');
    } else {
      myImage.setAttribute('src', 'images/皮卡丘.jpg');
    }
}

var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')
function setUserName(){
    var myName = prompt('please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent='皮卡丘很可爱,'+myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var stortedName=localStorage.getItem('name');
    myHeading.textContent='皮卡丘很可爱'+stortedName
}

myButton.onclick=function(){
    setUserName();
}
