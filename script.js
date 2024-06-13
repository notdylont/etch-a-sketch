const container = document.querySelector(".container");

// setting up sketch pad
const pad = (n) => {
  for (let i = 0; i < n * n; i++) {
    const div = document.createElement("div");
    div.classList.add("etch");
    container.appendChild(div);
    div.setAttribute(
      "style",
      "border: 1px solid black; width: 30px; height: 30px; "
    );
  }
  const etch = document.querySelectorAll(".etch");
  etch.forEach(function (divs) {
    divs.addEventListener("mouseover", function () {
      divs.style.backgroundColor = "blue";
    });
  });
};

// adding color to sketch pad

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
  erase();
  let gridSize = prompt("Enter a size for the grid (n by n with a max of 100)");
  pad(gridSize);
});

// creation of pad
pad(16);
