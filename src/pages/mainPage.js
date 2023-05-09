import makeChild from "../functions/makeChild";

const main = document.querySelector("#content");
console.log(main);
export default function () {
  const homeMainContent = makeChild("div", "homeMainContent", [
    "m-auto",
    "md:ml-[40vw]",
    "ml-[20vw]",
    "mr-10",
    "max-[425px]:m-auto",
    "px-1",
    "flex",
    "justify-center",
    "align-center",
    "flex-col",
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

  homeMainContent.appendChild(headerInMainContent);
  homeMainContent.appendChild(welcomePar);
  main.appendChild(homeMainContent);
}
