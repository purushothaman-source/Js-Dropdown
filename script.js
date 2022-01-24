import Select from "./select.js";

const selectElements = document.querySelectorAll("[data-custom]");
console.log(selectElements);

selectElements.forEach(selectElement => {
  new Select(selectElement);
});
