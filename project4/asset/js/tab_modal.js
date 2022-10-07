
const tabMenuId = document.querySelector(".id");
const tabMenuPass = document.querySelector(".pass");

const close_btn = document.querySelector(".close_btn");


close_btn.addEventListener("click", () => {
    loginPopup.classList.add("close");
    loginPopup.classList.remove(".show")
    loginPopup.classList.add(".hide")
});

tabMenuId.addEventListener("click", () => {
    tabMenuId.classList.add("active");
    tabMenuPass.classList.remove("active");
});
tabMenuPass.addEventListener("click", () => {
    tabMenuPass.classList.add("active");
    tabMenuId.classList.remove("active");
});