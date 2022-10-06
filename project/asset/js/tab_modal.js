const loginPopup = document.querySelector(".login__popup");
const tabMenuId = document.querySelector(".id");
const tabMenuPass = document.querySelector(".pass");
const loginBtn = document.querySelector(".login_btn");
const close_btn = document.querySelector(".close_btn");


loginBtn.addEventListener("click", () => {
    loginPopup.classList.remove("close");
    loginPopup.classList.add(".show")
    loginPopup.classList.remove(".hide")

});
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