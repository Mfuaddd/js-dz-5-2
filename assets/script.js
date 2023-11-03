// const btnOpen = document.querySelector(".modal-open")
// const btnClose = document.querySelector(".modal-close")
// const XClose = document.querySelector(".modal-xclose")
// const modal = document.querySelector(".modal")
const modal = document.createElement("div")
const modalContent = document.createElement("div")
const modalHeader = document.createElement("div")
const modalBody = document.createElement("div")
const modalFooter = document.createElement("div")
const HeaderH2 = document.createElement("h2")
const BodyP = document.createElement("p")
const btnClose = document.createElement("span")
const btnSave = document.createElement("span")
const btnOpen = document.createElement("button")
const btnXClose = document.createElement("span")

btnOpen.classList.add("btn")
btnOpen.classList.add("modal-open")
btnOpen.textContent="Open"
document.body.append(btnOpen)

modal.classList.add("modal")
document.body.append(modal)

modalContent.classList.add("modal-content")
modal.append(modalContent)

modalHeader.classList.add("modal-header")
modalContent.append(modalHeader)

HeaderH2.textContent = "Modal Header"
modalHeader.append(HeaderH2)

btnXClose.classList.add("modal-xclose")
btnXClose.innerHTML = "&times;"
modalHeader.append(btnXClose)

modalBody.classList.add("modal-body")
modalContent.append(modalBody)

BodyP.textContent = "Some text in the Modal Body"
modalBody.append(BodyP)

modalFooter.classList.add("modal-footer")
modalContent.append(modalFooter)

btnClose.classList.add("btn")
btnClose.classList.add("modal-close")
btnClose.textContent="Close"
modalFooter.append(btnClose)

btnSave.classList.add("btn")
btnSave.classList.add("modal-save")
btnSave.textContent="Save"
modalFooter.append(btnSave)

btnOpen.addEventListener("click",function () {
    modal.style.display = "block"
})
btnClose.addEventListener("click",function () {
    modal.style.display = "none"
})
btnXClose.addEventListener("click",function () {
    modal.style.display = "none"
})