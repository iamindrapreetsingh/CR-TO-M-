const crInput = document.querySelector(".cr-input");
const mnInput = document.querySelector(".mn-input");

crInput.addEventListener("input", () => operation(crInput));
mnInput.addEventListener("input", () => operation(mnInput));

operation = (input) => {
  switch (input) {
    case crInput:
      if (input.value.length == 0) {
        mnInput.value = "0.00";
      } else {
        mnInput.value = crInput.value / 7.25;
      }
      break;

    case mnInput:
      if (input.value.length == 0) {
        crInput.value = "0.00";
      } else {
        crInput.value = mnInput.value * 7.25;
      }
      break;
  }
};
