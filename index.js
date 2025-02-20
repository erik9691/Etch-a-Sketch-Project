const container = document.querySelector(".container");
const btnGrid = document.querySelector(".btn-grid");
const btnChange = document.querySelector(".btn-change");
let boxes
let gridSize
let colorMode = false;

createBoxes(16);

btnGrid.addEventListener("click", createNewGrid)

btnChange.addEventListener("click", function(){if(colorMode === false){colorMode = true;}else{colorMode=false}});
btnChange.addEventListener("click", createNewGrid)

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
        if(colorMode){box.style.opacity = 0;}

        box.addEventListener("mouseenter", function(e)
        {
            if (colorMode) 
            {
                e.target.style.backgroundColor = "rgb("+ Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";

                let currentOpacity = parseFloat(e.target.style.opacity);
                if (currentOpacity < 1) 
                {
                     e.target.style.opacity = currentOpacity + 0.1;
                }
            }
            else
            {
                e.target.style.backgroundColor = "black";
            }
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