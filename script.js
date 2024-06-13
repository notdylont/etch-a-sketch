const container = document.querySelector(".container");
// setting up sketch pad
const pad = (n) => {
  const boxSize = container.clientWidth / n;
  for (let i = 0; i < n * n; i++) {
    const div = document.createElement("div");
    div.classList.add("etch");
    container.appendChild(div);
    div.setAttribute("style", `width: ${boxSize}px; height: ${boxSize}px;`);
  }
  // adding color to sketch pad
  const etch = document.querySelectorAll(".etch");
  etch.forEach(function (divs) {
    divs.addEventListener("mouseover", function () {
      divs.style.backgroundColor = "blue";
    });
  });
};

// removing all divs from sketch pad
const erase = () => {
  const etch = document.querySelectorAll(".etch");
  etch.forEach(function (i) {
    container.removeChild(i);
  });
};

// reset button
const reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
  const etch = document.querySelectorAll(".etch");
  etch.forEach(function (sq) {
    sq.style.backgroundColor = "white";
  });
});

// size button
const size = document.querySelector("#size");
size.addEventListener("click", function () {
  let gridSize = prompt("Enter a size for the grid (n by n with a max of 100)");
  if (gridSize > 100) {
    alert("Cannot enter more than 100");
  } else {
    erase();
    pad(gridSize);
  }
});

// creation of pad
pad(16);
