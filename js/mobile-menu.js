(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modalBackdrop: document.querySelector("[data-menu]"),
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