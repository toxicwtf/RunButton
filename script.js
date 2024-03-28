const yesbtn = document.querySelector(".yes");
const nobtn = document.querySelector(".no");

nobtn.addEventListener("mouseenter", () => {
  let randomeTop = Math.floor(Math.random() * 650);
  let randomeLeft = Math.floor(Math.random() * 1200);
  nobtn.style.left = randomeLeft + "px";
  nobtn.style.top = randomeTop + "px";
});

yesbtn.addEventListener("click", () => {
  alert("LOVE YOU <3");
});
