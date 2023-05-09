const makeChild = (type, id, classes, text = "") => {
  const instance = document.createElement(type);
  instance.id = id;
  instance.classList.add(...classes);
  instance.textContent = text;
  return instance;
};

export default makeChild;
