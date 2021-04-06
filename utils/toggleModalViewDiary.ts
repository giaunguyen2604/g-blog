const toogleModalDiary = () => {
  const modal = document.getElementById("modal-1");
  if (modal) {
    modal.classList.toggle("md-show");
  }
};

export default toogleModalDiary;
