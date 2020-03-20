'use strict';

const body = document.querySelector('body');
/*body.addEventListener('click', (event) => {
    event.preventDefault();
});*/


// NAV SELECT

const navItemsList = document.querySelector('.header .mid_header .nav ul');
const navItems = document.querySelectorAll('.header .mid_header .nav ul li');

navItemsList.addEventListener('click', (event) => {
    navItems.forEach(item => item.classList.remove('selected'))

    const li = event.target.closest('li');
    li.classList.add('selected');
});


//            GALERY

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.my-modal');
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', () => {
    hideModal();
    /* from --> src/create_hideModal.js */
});



gallery.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName !== 'IMG' && !target.classList.contains('fa-star') && !target.classList.contains('fa-edit') && !target.classList.contains('fa-trash-alt')) return;


    if (target.tagName === 'IMG' || target.classList.contains('fa-trash-alt')) {
        const galleryItem = target.closest('.gallery-item');
        createModal(target, galleryItem)
        /* from --> src/create_hideModal.js */

    } else if (target.classList.contains('fa-star')) {
        target.classList.toggle('favorite');

    } else {
        editingData(target.parentNode)
        /* from --> src/editData.js */
    }
});


