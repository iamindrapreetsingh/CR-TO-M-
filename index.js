const crTextArea = document.querySelector(".cr-textarea");
const mnTextArea = document.querySelector(".mn-textarea");

crTextArea.addEventListener("input", () => operation(crTextArea));
mnTextArea.addEventListener("input", () => operation(mnTextArea));

operation = (input) => {
  switch (input) {
    case crTextArea:
      if (input.value.length == 0) {
        mnTextArea.value = "0.00";
      } else {
        mnTextArea.value = parseInt(crTextArea.value) / 7.25;
      }
      break;

    case mnTextArea:
      if (input.value.length == 0) {
        crTextArea.value = "0.00";
      } else {
        crTextArea.value = parseInt(mnTextArea.value) * 7.25;
      }
      break;
  }
};
