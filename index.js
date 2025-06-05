const rouletteWheel = document.getElementById("roulette-wheel");

let orderedItems = [13, 6, 11, 4, 9, 2, 7, 14, 1, 12, 3, 10, 5, 8, 0];
let rouletteNumbers = [14, 1, 12, 3, 10, 5, 8, 0, 13, 6, 11, 4, 9, 2, 7];

function buildRoulette() {
  this.renderItems();

  document.getElementById("spinWheel").addEventListener("click", spinWheel);
}

function renderItems() {
  rouletteWheel.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    rouletteNumbers.forEach((item) => {
      const itemColor = item % 2 === 0 ? "red" : "black";
      const rouletteItem = document.createElement("div");
      rouletteItem.classList.add(
        "roulette-item",
        item == 0 ? "white" : itemColor
      );
      const numberSpan = document.createElement("span");
      numberSpan.textContent = item;
      rouletteItem.appendChild(numberSpan);
      rouletteWheel.appendChild(rouletteItem);
    });
  }
}

function spinWheel() {
  rouletteWheel.style.transition = "none";
  rouletteWheel.style.transform = "translateX(0)";

  setTimeout(() => {
    const targetItem = document.getElementById("targetItem").value;

    const itemIndex = orderedItems.findIndex((item) => item == targetItem);
    const itemSize = 100;

    const gap = 10;

    const rowSize = 15 * (itemSize + gap);

    const distance = rowSize * 3 + (itemIndex + 1) * (itemSize + gap);

    const rouletteWheel = document.getElementById("roulette-wheel");
    rouletteWheel.style.transition = "transform 3s ease-out";
    rouletteWheel.style.transform = `translateX(-${distance}px)`;
  }, 10);
}

window.addEventListener("load", buildRoulette);
