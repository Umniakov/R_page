import pepper from "../pics/pepper.png";
import makeChild from "../functions/makeChild";
const content = document.querySelector("#content");

const makeHeader = () => {
  const divHeader = makeChild("header", "header", [
    "flex",
    "items-center",
    "m-3",
    "sticky",
    "top-3",
  ]);
  const logoDiv = makeChild("div", "logoDiv", [
    "flex",
    "items-center",
    "flex-col",
    "sm:flex-row",
    "cursor-pointer",
  ]);
  const logoImg = makeChild("img", "img", ["w-8", "h-8"]);
  const brandName = makeChild(
    "h1",
    "brandName",
    ["font-bold", "uppercase", "ml-0", "sm:ml-2", "text-xs", "sm:text-base"],
    "Savory Delights"
  );
  logoImg.src = pepper;
  const buttonDiv = makeChild("div", "btnDiv", [
    "flex",
    "justify-center",
    "grow",
    "lg:gap-10",
    "sm:gap-3",
    "gap-2",
    "lg:text-2xl",
  ]);
  const buttons = () => {
    const btns = ["Home", "Menu", "Contacts"];
    btns.forEach((e) => {
      buttonDiv.appendChild(
        makeChild(
          "button",
          e,
          [
            "hover:text-orange-600",
            "transition",
            "ease-in-out",
            "delay-50",
            "hover:-translate-y-px",
            "hover:scale-110",
          ],
          e
        )
      );
    });
  };
  buttons();

  logoDiv.appendChild(logoImg);
  logoDiv.appendChild(brandName);
  divHeader.appendChild(logoDiv);
  divHeader.appendChild(buttonDiv);
  content.appendChild(divHeader);
};

export default makeHeader;
