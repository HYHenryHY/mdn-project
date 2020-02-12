let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/overheadpress.png'){
        myImage.setAttribute ('src','images/overheadpress2.jpg');
    } else {
        myImage.setAttribute ('src','images/overheadpress.png');
    }
}
