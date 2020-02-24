const bChangeColor = document.getElementById('bChangeColor');

bChangeColor.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'greenyellow';
    // document.body.setAttribute('class', 'green-yellow');
    document.body.classList.toggle('green');
});

const bRandomColor = document.createElement('button');
const tRandomColor = document.createTextNode('Random Color');
bRandomColor.appendChild(tRandomColor);
bChangeColor.after(bRandomColor);
bRandomColor.setAttribute('type', 'button');
bRandomColor.setAttribute('id', 'bRandomColor');
bRandomColor.addEventListener('click', function () {
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
});

const rangeRed = document.getElementById('rangeRed');
rangeRed.addEventListener('input', function () {
    console.log("Color range red is " + rangeRed.value);
    document.body.style.backgroundColor = 'rgb(' + rangeRed.value + ', 0, 0)';
});

const rangeGreen = document.getElementById('rangeGreen');
rangeGreen.addEventListener('input', function () {
    console.log("Color range green is " + rangeGreen.value);
    document.body.style.backgroundColor = 'rgb(' + rangeRed.value + ', ' + rangeGreen.value + ', 0)';
});

const rangeBlue = document.getElementById('rangeBlue');
rangeBlue.addEventListener('input', function () {
    console.log("Color range blue is " + rangeBlue.value);
    document.body.style.backgroundColor = 'rgb(' + rangeRed.value + ', ' + rangeGreen.value + ', ' + rangeBlue.value + ')';
});

document.body.addEventListener('mousemove', function (e) {
    const xPos = Math.round(e.clientX / window.innerWidth * 255);
    console.log(xPos);
    const yPos = Math.round(e.clientY / window.innerHeight * 255);
    console.log(yPos);
    document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ', 100)';
});