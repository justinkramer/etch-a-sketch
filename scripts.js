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
    makeGrid(rows, rows);
    let boxes = document.getElementsByClassName('grid-item');
    let flexPercentage = calculateFlexBasis(rows);
    Array.from(boxes).forEach(box => {
        box.style.flexBasis = `${flexPercentage}%`;
    });
}

makeGrid(100, 100);

document.addEventListener('mouseover', function(e) {
    if (e.target.className === 'grid-item') {
        e.target.style.backgroundColor = 'black';
    }
});

document.getElementById('clear').addEventListener('click', clear);
document.getElementById('resize').addEventListener('click', resize);