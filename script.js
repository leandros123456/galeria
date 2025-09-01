const [btnNext, btnPrev] = [
  document.getElementById("botao-proximo"),
  document.getElementById("botao-anterior"),
];

let images = new Array();
document.querySelectorAll(".preview").forEach(img => images.push(img.src));
const currImage = document.getElementById('currImage');

btnNext.addEventListener("click", () => {
  const idx = images.findIndex((image) => image === currImage.src);
  currImage.src = images[(idx + 1) % images.length];
});

btnPrev.addEventListener("click", () => {
    const idx = images.findIndex((image) => image === currImage.src);
    currImage.src = images[idx === 0 ? images.length - 1 : idx - 1];
});