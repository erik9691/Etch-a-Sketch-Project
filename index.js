const container = document.querySelector(".container");
const btnGrid = document.querySelector(".btn-grid");

createBoxes();

const boxes = document.querySelectorAll(".box");

function createBoxes()
{
    for (let i = 0; i < (16*16); i++)
    {
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }
}

function createNewGrid()
{
    boxes.forEach((box) => 
    {
        box.remove();
    });
}


boxes.forEach((box) => 
{
    box.addEventListener("mouseenter", function(e)
    {
        e.target.classList.add("painted");
    });
});

btnGrid.addEventListener("click", createNewGrid)