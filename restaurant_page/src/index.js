// import css
import "./style.css";
// import loader
import Loader from "../src/loader";
import { Home } from "../src/home";
import { Contact } from "../src/contact";
import { Menu } from "../src/menu";
// main js file

const main = () => {
  const content = document.getElementById("content");
  const navbar = document.createElement("div");

  const links = ["HOME", "MENU", "CONTACT"];
  let headline;

  links.map((link) => {
    const linkElement = document.createElement("button");
    linkElement.textContent = link;
    linkElement.addEventListener("click", (e) => {
      let buttonText = e.target.innerText;
      if (buttonText === "HOME") {
        //
        headline = Home();
      } else if (buttonText === "MENU") {
        headline = Menu();
      } else {
        headline = Contact();
      }
      content.innerHTML = "";
      content.appendChild(navbar);
      content.appendChild(headline);
      //   window.location.reload();
    });

    navbar.appendChild(linkElement);
  });

  //   const headline = Home();

  headline = Home();
  content.appendChild(navbar);
  content.appendChild(headline);
};

Loader(main);
