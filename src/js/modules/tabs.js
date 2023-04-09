const tabs = ({
  headerSelector,
  tabSelector,
  contentItemSelector,
  activeClass,
}) => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const contentItems = document.querySelectorAll(contentItemSelector);

  const hideTabContent = () => {
    contentItems.forEach((contentItem) => {
      contentItem.style.display = "none";
    });

    tabs.forEach((tabItem) => {
      tabItem.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {
    contentItems[i].style.display = "block";
    tabs[i].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const { target } = e;
    if (
      target.classList.contains(tabSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
    ) {
      tabs.forEach((tabItem, index) => {
        if (target === tabItem || target.parentNode === tabItem) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });

  header.addEventListener("keydown", (e) => {
    const { target } = e;
    if (
      target.classList.contains(tabSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
    ) {
      tabs.forEach((tabItem, index) => {
        if (target === tabItem || target.parentNode === tabItem) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
};

export default tabs;
