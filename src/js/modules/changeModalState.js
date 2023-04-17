import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowsForm = document.querySelectorAll(".balcon_icons_img");
  const windowWidth = document.querySelectorAll("#width");
  const windowHeight = document.querySelectorAll("#height");
  const windowType = document.querySelectorAll("#view_type");
  const windowsProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  const bindActionToElems = (event, elem, property) => {
    elem.forEach((item, index) => {
      console.log(item);
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[property] = index;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              elem.forEach((box, j) => {
                box.checked = false;
                if (index == j) {
                  box.checked = true;
                }
              });
            } else {
              state[property] = item.value;
            }
            break;
          case "SELECT":
            state[property] = item.value;
            break;
        }
        console.log(state);
      });
    });
  };

  bindActionToElems("click", windowsForm, "form");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowsProfile, "profile");
};

export default changeModalState;
