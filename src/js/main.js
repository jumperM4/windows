import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import images from "./modules/images";

window.addEventListener("DOMContentLoaded", () => {
  let modalState = {};
  changeModalState(modalState);

  modals();
  tabs({
    headerSelector: ".glazing_slider",
    tabSelector: ".glazing_block",
    contentItemSelector: ".glazing_content",
    activeClass: "active",
  });
  tabs({
    headerSelector: ".decoration_slider",
    tabSelector: ".no_click",
    contentItemSelector: ".decoration_content > div > div",
    activeClass: "after_click",
  });
  tabs({
    headerSelector: ".balcon_icons",
    tabSelector: ".balcon_icons_img",
    contentItemSelector: ".big_img > img",
    activeClass: "do_image_more",
    display: "inline-block",
  });
  forms(modalState);
  images();
});
