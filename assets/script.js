const btnOpen = document.querySelector(".modal-open")
const btnClose = document.querySelector(".modal-close")
const XClose = document.querySelector(".modal-xclose")
const modal = document.querySelector(".modal")

btnOpen.addEventListener("click",function () {
    modal.style.display = "block"
})
btnClose.addEventListener("click",function () {
    modal.style.display = "none"
})
XClose.addEventListener("click",function () {
    modal.style.display = "none"
})