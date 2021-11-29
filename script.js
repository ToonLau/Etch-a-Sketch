const grid = document.querySelector('div.grid');
const reset = document.querySelector('button.reset');
const defaultSize = 16;
let size = defaultSize;

createGrid(size);

reset.onclick = () => resetWindow();

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (let i = 0; i < size * size; i++) {
        const element = document.createElement('div');
        element.addEventListener('mouseover', changeColor);
        grid.appendChild(element);
    }
}

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, 
        ${randomG}, ${randomB})`
}

function resetWindow() {
    grid.innerHTML = '';
    updateSizeValue();
    createGrid(size);
}

function updateSizeValue() {
    let value = parseInt(prompt("Enter the new size: "));
    if (value > 100) {
        size = 100;
    } else {
        size = value;
    }
}