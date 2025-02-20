const container = document.querySelector(".container");
const btnGrid = document.querySelector(".btn-grid");
let boxes
let gridSize

createBoxes(16);

btnGrid.addEventListener("click", createNewGrid)

function createBoxes(amount)
{
    for (let i = 0; i < (amount*amount); i++)
    {
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }

    

    addBoxEvents();
}

function addBoxEvents()
{
    boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => 
    {
        box.addEventListener("mouseenter", function(e)
        {
            e.target.classList.add("painted");
        });

        box.style.width = (100/gridSize) + "%";
    });
}

function createNewGrid()
{
    boxes.forEach((box) => 
    {
        box.remove();
    });

    gridSize = prompt("Enter grid size (max 100):","16");

    while (gridSize > 100 || isNaN(gridSize)) 
    {
        gridSize = prompt("ERROR Enter grid size (max 100):","16");
    }

    createBoxes(gridSize);
}