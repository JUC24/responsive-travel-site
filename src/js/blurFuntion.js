const blurHeader = () => {
  const header = document.getElementById("header");
  const scrollValue = window.scrollY;

  scrollValue >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

const blurFuntion = window.addEventListener("scroll", blurHeader);

export default blurFuntion;
