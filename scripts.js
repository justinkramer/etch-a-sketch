let makeGrid = (rows, cols) => {
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item';
    }
}

let calculateFlexBasis = (rows) => {
    let flexPercentage = (1/rows) * 100;
    return flexPercentage;
}

let clear = () => {
    let grid = document.getElementById('grid');
    let boxes = document.getElementsByClassName('grid-item');
    let sqrt = Math.sqrt(boxes.length);
    grid.innerHTML = '';
    makeGrid(sqrt, sqrt);
    let newBoxes = document.getElementsByClassName('grid-item');
    let flexPercentage = calculateFlexBasis(sqrt);
    Array.from(newBoxes).forEach(box => {
        box.style.flexBasis = `${flexPercentage}%`;
    });
}

let resize = () => {
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    let rows = prompt('How many rows?');
    if(rows > 100) {
        rows = 100;
    }
    makeGrid(rows, rows);
    let boxes = document.getElementsByClassName('grid-item');
    let flexPercentage = calculateFlexBasis(rows);
    Array.from(boxes).forEach(box => {
        box.style.flexBasis = `${flexPercentage}%`;
    });
}

let drawColor = () => {
    let color = 'black';
    if(document.getElementById('rainbow').classList.contains('color-change-active')){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        color = `rgb(${r}, ${g}, ${b})`;
    }
    else if(document.getElementById('color-picker').classList.contains('color-change-active')){
        color = document.getElementById('color-picker').value;
    }
    else if(document.getElementById('eraser').classList.contains('color-change-active')){
        color = 'white';
    }
    return color;
}

let toggleColors = (e) => {
    let buttons = document.querySelectorAll('.color-change');
    buttons.forEach(button => {
        button.classList.remove('color-change-active');
    });
    e.target.classList.add('color-change-active');
}

let mouseHeld = null;

let draw = (e) => {
    if (e.target.className === 'grid-item') {
        e.target.style.backgroundColor = drawColor();
    }
}

let startDraw = (e) => {
    mouseHeld = setInterval(() => {
        document.addEventListener('mouseover', draw);
    }, 50);
}

let endDraw = (e) => {
    clearInterval(mouseHeld);
    document.removeEventListener('mouseover', draw);
}

makeGrid(100, 100);

document.addEventListener('mousedown', startDraw);
document.addEventListener('mouseup', endDraw);
document.addEventListener('mouseleave', endDraw);

document.getElementById('clear').addEventListener('click', clear);
document.getElementById('resize').addEventListener('click', resize);
document.querySelectorAll('.color-change').forEach(button => {
    button.addEventListener('click', toggleColors);
});