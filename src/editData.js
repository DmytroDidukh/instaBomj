'use strict';

function editingData(newContent) {
    const editForm = document.createElement('div');
    editForm.classList = 'editForm';
    editForm.innerHTML = `
        <input type="text" class="form-control" placeholder="where/when?" >
        <div class="input-group-append" id="button-addon4">
            <button type="button" class="btn btn-success btn-sm">Edit</button>
            <button type="button" class="btn btn-danger btn-sm">Cancel</button>
        </div>`;


    editForm.addEventListener('click', (event) => {
        if (event.target.tagName !== "BUTTON") return;

        const btn = event.target;
        const input = editForm.firstElementChild;

        if (btn.classList.contains('btn-success')) {
            if (!input.value) return;
            newContent.innerHTML = input.value + '<i class="fas fa-edit"></i>';
        }

        editForm.replaceWith(newContent);
    });

    newContent.replaceWith(editForm);
    editForm.firstElementChild.focus();
}
