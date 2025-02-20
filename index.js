const container = document.querySelector(".container");

createBoxes();

function createBoxes()
{
    for (let i = 0; i < (16*16); i++)
    {
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }
}