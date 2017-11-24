
var modalWrapper =  document.querySelectorAll('.modal-wrapper')[0];
var modalOpen =  document.querySelectorAll('.modal.open')[0];
function openModal(modal) {
    modalWrapper.classList.add('open');
    openModalItem(modal);
}
function openModalItem(modal) {
    modal.classList.add('open');
}
function closeModal() {
    modalWrapper.classList.remove('open');
    modalOpen.classList.remove('open');
}
 function openFormIn(event) {
     var modal =  document.querySelectorAll('#modal-in')[0];
     openModal(modal);
};
 function openFormReg(event) {
     var modal =  document.querySelectorAll('#modal-register')[0];
     openModal(modal);
};
