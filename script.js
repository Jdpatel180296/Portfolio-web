let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const certificateImgs = document.querySelectorAll("#certificateImg");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
const typed = new Typed(".multiple-text", {
  strings: ["Software Developer", "BackEnd Developer", "Data Science Engineer"],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
  Animation: eval,
});

certificateImgs.forEach((certificateImg) => {
  certificateImg.addEventListener("click", () => {
    window.open(certificateImg.src, "_blank");
  });
});
