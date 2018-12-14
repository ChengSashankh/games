/**
 * Generate the grid containing input elements for the Sudoku board
 */
let generateGrid = function () {
    console.log('Generating grid');
    let grid = document.getElementById("grid_container");
    for (let i = 0; i < 81; i++) {
        console.log('Loop i = ' + i);
        if (i % 9 === 0)
            createRow(parseInt(i / 9));
        createCell(parseInt(i / 9), i);
    }
};

let createRow = function (r) {
    let row = document.createElement('div');
    row.setAttribute('id', 'row_' + r);
    row.setAttribute('class', 'row');
    let grid = document.getElementById('grid_container');
    grid.appendChild(row);
};

let createCell = function (r, i) {
    let cell = document.createElement('input');
    cell.setAttribute('id', 'cell_' + i);
    cell.setAttribute('style', 'cell');
    cell.setAttribute('maxLength', 1);
    cell.setAttribute('size', 1);
    let row = document.getElementById('row_' + r);
    row.appendChild(cell);
};

setTimeout(generateGrid, 500);