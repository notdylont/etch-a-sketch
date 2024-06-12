const container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
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
