let show = false;
let currentIndex = 0;
const slider = document.getElementById("slider");
const totalCards = slider.children.length;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextCard() {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    updateSlider();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const linksection = document.getElementsByClassName("titleSection")[0];
  const menu = document.getElementById("mobileLinks");

  if (width > 768) {
    linksection.style.flexDirection = "";
    menu.style.display = "";
    menu.classList.remove("show");
    const button = document.getElementsByClassName("menu-button")[0];
    button.innerHTML = "☰";
    button.style.paddingLeft = "";
    show = false;
  }
});

function toggleMenu() {
  if (!show && window.innerWidth <= 768) {
    show = true;
    const button = document.getElementsByClassName("menu-button")[0];
    button.innerHTML = "×";
    button.style.paddingLeft = "650%";
    const linksection = document.getElementsByClassName("titleSection")[0];
    linksection.style.flexDirection = "column";
    const menu = document.getElementById("mobileLinks");
    menu.classList.toggle("show");
    menu.style.display = "flex";
    menu.style.justifyContent = "space-around";
    menu.style.alignItems = "center";
  } else if (window.innerWidth <= 768) {
    const linksection = document.getElementsByClassName("titleSection")[0];
    linksection.style.flexDirection = "row";
    const menu = document.getElementById("mobileLinks");
    menu.style.display = "none";
    const button = document.getElementsByClassName("menu-button")[0];
    button.innerHTML = "☰";
    button.style.paddingLeft = "";
    show = false;
  }
}
