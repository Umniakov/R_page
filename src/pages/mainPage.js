import makeChild from "../functions/makeChild";
import menuPage from "./menuPage.js";
const main = document.querySelector("#content");
export default function () {
  const homeMainContent = makeChild("div", "homeMainContent", [
    "m-auto",
    "md:ml-[40vw]",
    "ml-[20vw]",
    "mr-10",
    "max-[425px]:m-auto",
    "px-1",
    "flex",
    "flex-col",
    "items-center",
  ]);
  const headerInMainContent = makeChild(
    "h1",
    "headerInMainContent",
    [
      "md:text-6xl",
      "text-5xl",
      "font-black",
      "text-center",
      "bg-gradient-to-r",
      "from-red-500",
      "to-purple-500",
      "text-transparent",
      "bg-clip-text",
      "mt-8",
      "pb-10",
    ],
    "Where every bite is a delight"
  );
  const welcomePar = makeChild(
    "p",
    "welcomePar",
    ["text-2xl", "text-center", "px-8"],
    `Thank you for choosing Savory Delights. We're excited to share our passion for delicious food with you.`
  );
  const btnOrder = makeChild(
    "button",
    "btnOrder",
    [
      "text-white",
      "bg-gradient-to-br",
      "from-pink-500",
      "to-orange-400",
      "hover:bg-gradient-to-bl",
      "focus:ring-4",
      "focus:outline-none",
      "focus:ring-pink-200",
      "font-medium",
      "rounded-lg",
      "text-sm",
      "px-5",
      "py-2.5",
      "text-center",
      "block",
      "w-fit",
      "mt-5",
    ],
    "Order Now"
  );
  btnOrder.addEventListener("click", (e) => {
    let oldChild = main.childNodes[1];
    main.replaceChild(menuPage(), oldChild);
  });
  homeMainContent.appendChild(headerInMainContent);
  homeMainContent.appendChild(welcomePar);
  homeMainContent.appendChild(btnOrder);
  return homeMainContent;
}
