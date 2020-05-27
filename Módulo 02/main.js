var newSquare = document.querySelector("#btnSquare")
let count = 1;

newSquare.onclick = function() {

    let boxElement = document.createElement('div');
    boxElement.style.width ='100px';
    boxElement.style.height ='100px';
    boxElement.style.marginTop ='10px';
    boxElement.style.backgroundColor ='#f00';

    boxElement.addEventListener('mouseover', () => {
        let newColor =getRandomColor();

        console.log(boxElement.id + ": " + newColor);
        boxElement.style.backgroundColor = newColor;
    });
    document.getElementById('app').appendChild(boxElement);
    count++;
}

function getRandomColor() {
    var color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    return color;
}
