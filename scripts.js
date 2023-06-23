let makeGrid = (rows, cols) => {
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item';
    }
}

makeGrid(16, 16);