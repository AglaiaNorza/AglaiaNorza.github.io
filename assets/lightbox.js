const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

const images = document.querySelectorAll('.photo-card img');

// open the lightbox on image clicks
images.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src; // copy the image source
        lightbox.classList.add('active'); // turn on the overlay
    });
});

// when the lightbox overlay is clicked, it closes
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active'); 
});
