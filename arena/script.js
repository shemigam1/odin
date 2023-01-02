const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red";
container.appendChild(paragraph);

const head2 = document.createElement("h2");
head2.style.color = "blue";
head2.textContent = "I'm blue h2";
container.appendChild(head2);

const div = document.createElement("div");
div.setAttribute(
  "style",
  "border: 1px solid black; background-color: pink; width: 100px; height: 100px;"
);
container.appendChild(div);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
  //   alert(e.target);
});
