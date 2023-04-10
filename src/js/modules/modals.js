const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    function closeModel() {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        //document.body.classList.add("modal-open");
      });
    });

    close.addEventListener("click", () => {
      closeModel();
      //document.body.classList.remove("modal-open");
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        closeModel();
      }
      //document.body.classList.remove("modal-open");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModel();
        //document.body.classList.remove("modal-open");
      }
    });
  }

  //   const callEngineerBtn = document.querySelector(".popup_engineer_btn"),
  //     modalEngineer = document.querySelector(".popup_engineer"),
  //     modalEngineerClose = document.querySelector(".popup_engineer .popup_close");

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  //showModalByTime(".popup", 60000);
};

export default modals;
