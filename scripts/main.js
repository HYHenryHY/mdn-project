
/*making the picture change with if function*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/overheadpress.png'){
        myImage.setAttribute ('src','images/overheadpress2.jpg');
    } else {
        myImage.setAttribute ('src','images/overheadpress.png');
    }
}

/*creating a personalized greeting */
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName () {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Ready for same gains, ' + myName;
    }
}

/* adding if..else block, which is the initialization code */

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ready for some gains, ' + storedName;
}

myButton.onclick = function () {
    setUserName ();
}