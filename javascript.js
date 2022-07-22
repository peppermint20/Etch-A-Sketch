
let container = document.querySelector("#container");

window.onload = createGrid();

// for (let i = 0; i < 16; ++i){
//     let board = document.createElement("div");
//     board.className = "grid";
//     board.style.border = "solid";
//     board.textContent = "hi";
//     container.appendChild(board);
// }

function createGrid(){
    // Run this function in a loop to create a 16x16 grid
    for (let i = 0; i < 16; ++i){
        for (let j = 0; j < 16; ++j){
            let board = document.createElement("div");
            board.className = "grid";
            board.style.border = "solid";
            board.textContent = "hi";
            container.appendChild(board);
        }

    }
}