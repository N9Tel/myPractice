
const modalWindow = document.getElementById("modalWindow");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const openModalBtn = document.getElementById("openModalBtn");
const modalOpenClass = "modal-open";
    
openModalBtn.addEventListener("click", handleModalOpen);
overlay.addEventListener("click", handleModalOpen);
closeBtn.addEventListener("click", handleModalOpen);

function handleModalOpen() {
    document.body.classList.toggle(modalOpenClass);
}

