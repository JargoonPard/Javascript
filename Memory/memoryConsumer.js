'use strict';

let multiplier = 1;
let foo = (x) => {work(x);};


function init(){
    const addPicButton = document.getElementById("useMemoryButton");
    addPicButton.addEventListener("click", AddAnotherPicture);
}

function AddAnotherPicture() {
    const picturesDiv = document.getElementById('pictures');

    let newImage = document.createElement("img");
    newImage.src = "GolfShoes.jpg";
    newImage.height = 100;
    newImage.width = 100;

    picturesDiv.appendChild(newImage);

    if(picturesDiv.children.length > (10 * multiplier))
    {
        //place a performance marker every 10 children
        performance.mark(`${10 * multiplier} mch (more children here)`);
        multiplier++;
        foo(multiplier);
    }

    picturesDiv.style.border = ".2em solid red";
}

function work(i) {
    console.log(i);
}