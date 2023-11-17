const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  const scrollValue = window.scrollY;

  scrollValue >= 350
    ? scrollUp.classList.add("Show-Scroll")
    : scrollUp.classList.remove("Show-Scroll");
};

const scroll = window.addEventListener("scroll", scrollUp);

export default scroll;
