const toggle = document.querySelector(".toggle_inp");
const icon = document.querySelector(".toggle_icon");
const subtitle = document.querySelector(".subtitle");
const search = document.querySelector(".search_inp");
const downloadBtn = document.querySelector(".search_btn");
const desc = document.querySelectorAll(".desc_text");
const footer = document.querySelector(".footer");

toggle.addEventListener("change", () => {
  icon.classList.toggle("bi-moon-fill");
  icon.classList.toggle("bi-sun");
  document.body.classList.toggle("dark-theme");
  search.classList.toggle("dark-theme");
  subtitle.classList.toggle("text_dark");
  footer.classList.toggle("text_dark");
  desc.forEach((d) => {
    d.classList.toggle("text_dark");
  });
});
// downloadBtn.addEventListener("click", () => {
//   sendURL(search.value);
// });

// function sendURL(URL) {
//   (window.location.href = `/download?URL=${URL}`), true;
// }
