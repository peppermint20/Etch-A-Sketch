let container = document.querySelector("#container");
// let grid = document.createElement("div");
// grid.style.color = "blue";
// grid.style.border = "solid";
// grid.textContent = "hello;"
// container.appendChild(grid);

for (let i = 0; i < 64*64; ++i){
        let grid = document.createElement("div");
        grid.style.border = "solid";
        grid.style.padding = "6px";
        container.appendChild(grid);
}

function makeGrid(size){
    for (let i = 0; i < size * size; ++i){
            let grid = document.createElement("div");
            grid.style.border = "solid";
            grid.textContent = "hello;"
            container.appendChild(grid);
    }
}