const resetButton = document.querySelector('button');

resetButton.addEventListener('click', () => {
    let sideSize = +prompt("How many number of squares per sides? (Maximum sides: 100)");
    createGrid(sideSize);
});

createGrid();


function createGrid(size = 16) {
    const container = document.querySelector('.container');
    container.innerHTML = ""
    for (let i = 0; i < 10000; i++) {
        const grid = document.createElement('div');
        grid.style.width = `${700 / size}px`;
        grid.style.height = `${700 / size}px`;
        grid.style.border = '1px solid black';
        container.appendChild(grid);
    }
    changeColor();
}

function changeColor() {
    const grids = document.querySelectorAll('.container div');
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'yellow';
        });
    })
}