'use strict';

function createModal(target, galleryItem) {
    const doc = document.documentElement;
    let isImg = false;

    if (target.tagName === 'I') {
        modal.innerHTML = `
          <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delete image?</h5>       
                </div>     
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>
                    <button type="button" class="btn btn-secondary">Cancel</button>
                </div>
            </div>
          </div>`;


        /* firstElementChild --> тобто внутрішній блок модалки для видалення (modal-dialog)*/
        modal.firstElementChild.addEventListener('click', (event) => {
            if (event.target.tagName !== 'BUTTON') return;

            const btn = event.target;
            if (btn.classList.contains('btn-danger')) {
                galleryItem.remove();
            }

            hideModal();
        })


    } else if (target.tagName === 'IMG') {
        const src = target.src; //.match(/\i\m\g\/.+/i)

        modal.innerHTML = '<img src="" alt="">';
        modal.firstElementChild.src = src;

        isImg = true;
    }

    modal.style.display = 'block';
    overlay.style.display = 'block';
    body.style.overflow = 'hidden';

    modal.style.left = (doc.clientWidth - (isImg ? modal.firstElementChild.offsetWidth : modal.offsetWidth)) / 2 + 'px';
    modal.style.top = (doc.clientHeight - (isImg ? modal.firstElementChild.offsetHeight : modal.offsetHeight)) / 2 + 'px';

}



function hideModal() {
    modal.style.display = '';
    overlay.style.display = '';
    body.style.overflow = '';
}
