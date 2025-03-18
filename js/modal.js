(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modalBackdrop: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    refs.modalBackdrop.classList.remove("is-hidden");
    refs.modalBackdrop.classList.add("is-visible");
    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    refs.modalBackdrop.classList.remove("is-visible");
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      refs.modalBackdrop.classList.add("is-hidden");
    }, 250); 
  }
})();