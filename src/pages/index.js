// import f from "./mainPage";
import "../style/index.css";
import makeHeader from "./header.js";
import mainPage from "./mainPage.js";
import menuPage from "./menuPage.js";
import contactPage from "./contactPage.js";
makeHeader();
document.body.classList.add("bg-image");
const mainContent = document.querySelector("#content");
mainContent.appendChild(mainPage());

const navBtnListener = () => {
  const btns = document.querySelectorAll("#btnDiv > button");
  btns[0].classList.add("text-orange-600");
  let btnMain = document
    .querySelector("#btnOrder")
    .addEventListener("click", buildPage);
  btns.forEach((e) => e.addEventListener("click", buildPage));

  function buildPage(e) {
    console.log(e.target.id);
    const navbar = document.querySelector("#header");
    navbar.classList.remove("bg-slate-100");
    btns.forEach((e) => e.classList.remove("text-orange-600"));
    let oldChild = mainContent.childNodes[1];
    console.log(oldChild);
    if (
      e.target.id === "Home" ||
      e.target.id === "brandName" ||
      e.target.id === "img"
    ) {
      mainContent.replaceChild(mainPage(), oldChild);
      btnMain = document
        .querySelector("#btnOrder")
        .addEventListener("click", buildPage);
      btns[0].classList.add("text-orange-600");
    } else if (e.target.id === "Menu" || e.target.id === "btnOrder") {
      mainContent.replaceChild(menuPage(), oldChild);
      btns[1].classList.add("text-orange-600");
      const gridRows = document.querySelectorAll(`div[data-cell^="grid-item"]`);
      navbar.classList.add("bg-slate-100");
      window.addEventListener("scroll", function () {
        gridRows.forEach((box, index) => {
          const boxTop = box.getBoundingClientRect().top;
          box.classList.add("transition-opacity");
          if (boxTop < 50) {
            box.classList.remove("opacity-100");
            box.classList.add("opacity-50");
          } else {
            box.classList.remove("opacity-50");
            box.classList.add("opacity-100");
          }
        });
      });
    } else if (e.target.id === "Contacts") {
      mainContent.replaceChild(contactPage(), oldChild);
      e.target.classList.add("text-orange-600");
      navbar.classList.add("bg-slate-100");
    }
  }
  return {
    buildPage,
  };
};
const logoDiv = document
  .querySelector("#logoDiv")
  .addEventListener("click", navBtnListener().buildPage);

navBtnListener();
