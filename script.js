const container = document.getElementById("grid-container");

// Create grid with default size of 50
createGrid(50);

function createGrid(sideLength) {
    let size = 800 / sideLength + "px";
    for (let i = 0; i < sideLength; i++) {
        const ul = document.createElement("ul");

        for (let j = 0; j < sideLength; j++) {
            const li = document.createElement("li");
            li.className = "grid-item";
            li.addEventListener("mouseenter", function () {
                li.style.backgroundColor = getRandomColor();
            });
            li.style.width = size;
            li.style.height = size;
            ul.appendChild(li);
        }
        container.appendChild(ul);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    const color = `rgb(${r}, ${g}, ${b})`;
    return color;
  }
  

const lengthBtn = document.getElementById("lengthButton");
lengthBtn.addEventListener("click", () => {
    sideLength = prompt("How long would you like the sides?  (1-100)");
    sideLength = parseInt(sideLength);

    if (sideLength > 0 && sideLength <= 100) {
        removeGrid();
        createGrid(sideLength);
    }
})

function removeGrid() {
    const element = document.getElementById("grid-container");

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}