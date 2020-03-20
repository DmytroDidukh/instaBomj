'use strict';

initialLocalGallery(photoGallery);


function initialLocalGallery(photoGallery) {
    photoGallery.forEach( item => createGallery(item));
}

function createGallery({id, title = 'Your title', date = 'Date', src }) {
   const div = document.createElement('div');
    div.classList.add('gallery-item');
    div.innerHTML = `                
                    <div class="img-block">
                        <img src="${src}" alt="">
                        <span class="date">${date}<i class="fas fa-edit"></i></span>
                    </div>
                    <div class="content-block">
                        <div class="title">
                            <p>${title}<i class="fas fa-edit"></i></p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-trash-alt"></i>
                        </div>
                     <!--   <div class="social">
                            <a href="" title="share on facebook"><i class="fab fa-facebook"></i></a>
                            <a href="" title="share on twitter"><i class="fab fa-twitter"></i></a>
                            <a href="" title="share on google+"><i class="fab fa-google-plus-g"></i></a>
                            <a href="" title="share on youtube"><i class="fab fa-youtube"></i></a>
                            <a href="" title="share on instagram"><i class="fab fa-instagram"></i></a>
                        </div>-->
                    </div>`;

    //gallery береться з script.js
    gallery.prepend(div);
}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            let obj = {
                src: e.target.result
            };
            createGallery(obj);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#file-input").change(function() {
    readURL(this);
});



