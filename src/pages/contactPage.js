import makeChild from "../functions/makeChild";
import clock from "../pics/contacts/clock.png";
import email from "../pics/contacts/email.png";
import locationMark from "../pics/contacts/locationMark.png";
import call from "../pics/contacts/call.png";
const contactPage = () => {
  //main div
  const mainDiv = makeChild("div", "menuContainer", [
    "lg:grid",
    "lg:grid-cols-auto-fit-contact",
    "justify-items-center",
    "gap-4",
    "2xl:ml-[40vw]",
    "lg:m-auto",
    "m-4",
    "lg:mt-32",
    "md:p-5",
    "pt-5",
    "rounded-lg",
    "bg-orange-200",
    "m-2",
    "max-w-5xl",
  ]);
  const contactsPartDiv = makeChild("div", "contactsPartDiv", [
    "flex",
    "flex-col",
    "md:m-0",
    "mx-3",
    "grow-0",
  ]);
  const mapDiv = makeChild("div", "mapDiv", [
    "p-4",
    "flex",
    "lg:w-full",
    "justify-center",
    "m-auto",
  ]);
  const picElementCreate = (src, alt, param) => {
    const element = document.createElement("img");
    element.src = src;
    element.alt = alt;
    element.classList.add(...param);
    return element;
  };

  const divCreation = (pic, description, classes) => {
    const divItem = makeChild("div", undefined, ["flex", "pb-2"]);
    divItem.appendChild(pic);
    divItem.appendChild(description);
    if (classes) {
      divItem.classList.add(...classes);
    }
    return divItem;
  };
  //place div
  const contactPlace = makeChild(
    "p",
    undefined,
    ["text-xl", "pl-3"],
    "Parc de la fonderie, Sint-Jans-Molenbeek"
  );
  const placePic = picElementCreate(locationMark, "location", [
    "w-7",
    "object-contain",
  ]);
  contactsPartDiv.appendChild(divCreation(placePic, contactPlace));

  const contactClock = makeChild(
    "p",
    undefined,
    ["text-xl", "pl-3"],
    `Mon-Sun: 9am-9pm;`
  );
  const clockPic = picElementCreate(clock, "clock", ["w-7", "object-contain"]);
  contactsPartDiv.appendChild(divCreation(clockPic, contactClock));

  const contactPhone = makeChild(
    "p",
    undefined,
    ["text-xl", "pl-3"],
    `(333)-888-3333`
  );
  const callPic = picElementCreate(call, "call", ["w-7", "object-contain"]);
  contactsPartDiv.appendChild(divCreation(callPic, contactPhone));

  const contactEmail = makeChild(
    "p",
    undefined,
    ["pl-3", "text-orange-600", "text-2xl"],
    "Message us"
  );
  const emailPic = picElementCreate(email, "email", ["w-7", "object-contain"]);
  contactsPartDiv.appendChild(divCreation(emailPic, contactEmail));

  const form = makeChild("form", "contactForm", [
    "flex",
    "flex-col",
    "items-center",
    "items-stretch",
    "mt-4",
  ]);
  const html = `
  <div class="relative z-0 w-full mb-6 group">
      <input type="floating_name" name="floating_name" id="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
      <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your name</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div> 
  `;
  form.setHTML(html);

  const makeTextArea = () => {
    const textAreaDiv = document.createElement("div");
    const textareaInput = document.createElement("textarea");
    const textareaLabel = document.createElement("label");
    textareaLabel.textContent = "Type your message:";
    textareaLabel.classList.add(
      "peer-focus:font-medium",
      "absolute",
      "text-sm",
      "text-gray-600",
      "duration-300",
      "transform",
      "-translate-y-6",
      "scale-75",
      "top-3",
      "-z-10",
      "origin-[0]",
      "peer-focus:left-0",
      "peer-focus:text-orange-600",
      "peer-placeholder-shown:scale-100",
      "peer-placeholder-shown:translate-y-0",
      "peer-focus:scale-75",
      "peer-focus:-translate-y-6"
    );
    textareaLabel.setAttribute("for", "textArea");
    textareaInput.setAttribute("placeholder", " ");
    textareaInput.id = "textArea";
    textareaInput.classList.add(
      "block",
      "py-2.5",
      "px-0",
      "w-full",
      "text-sm",
      "text-gray-900",
      "bg-transparent",
      "border-0",
      "border-b-2",
      "border-orange-300",
      "appearance-none",
      "focus:outline-none",
      "focus:ring-0",
      "focus:border-orange-600",
      "peer",
      "resize-none"
    );
    textAreaDiv.classList.add("relative", "z-0", "w-full", "mb-6", "group");
    textAreaDiv.appendChild(textareaInput);
    textAreaDiv.appendChild(textareaLabel);
    return textAreaDiv;
  };
  const submitBtn = () => {
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.classList.add(
      "bg-transparent",
      "hover:bg-orange-400",
      "text-black",
      "font-semibold",
      "hover:text-white",
      "py-1",
      "px-2",
      "mt-2",
      "border",
      "border-black",
      "hover:border-transparent",
      "rounded",
      "w-16"
    );
    btn.textContent = "Send";
    return btn;
  };
  mapDiv.innerHTML = `<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.885874697071!2d4.3288058629517385!3d50.85179759885247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c31b81f69653%3A0xb5757d8e4973a0a!2sFonderiepark!5e0!3m2!1sen!2sbe!4v1685713979505!5m2!1sen!2sbe" 

  height="400px" 
  width="100%"
  style="border:0; border-radius: 10px; object-fit: cover;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
  </iframe>`;
  form.appendChild(makeTextArea());
  form.appendChild(submitBtn());
  contactsPartDiv.appendChild(form);
  // divWithTextarea.appendChild(textarea);
  mainDiv.appendChild(contactsPartDiv);
  mainDiv.appendChild(mapDiv);
  return mainDiv;
};

export default contactPage;
