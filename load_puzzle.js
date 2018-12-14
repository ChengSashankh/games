let readPuzzle = function () {
    // Initialize board
    let board = [];
    for (let i = 0; i < 9; i++)
        board.push([]);
    
    // Read values from puzzle
    for (let i = 0; i < 81; i++) {
        let r = parseInt(i / 9);
        let c = (i % 9);

        let cell = document.getElementById('cell_' + i);
        if (cell.value !== '')
            board[r][c] = cell.value;
    }

    // Print the values to console to check
    // console.log(board);
};