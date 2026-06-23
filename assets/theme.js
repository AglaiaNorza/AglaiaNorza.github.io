    const swatches = document.querySelectorAll('.swatch');
    const body = document.body;

    // check if the user has a saved theme from a previous visit
    const savedTheme = localStorage.getItem('site-theme') || 'light';
    body.setAttribute('data-theme', savedTheme);

    // add click functionality to every swatch
    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            // get the theme name from the button
            const theme = swatch.getAttribute('data-theme');
            
            // apply it to the body
            body.setAttribute('data-theme', theme);
            
            // save it so it remembers across pages
            localStorage.setItem('site-theme', theme);
        });
    });


document.addEventListener('DOMContentLoaded', () => {
    // check if there are any image grids on the page
    const images = document.querySelectorAll('.image-grid img');
    
    if (images.length > 0) {
        // lightbox HTML
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        
        const lightboxImg = document.createElement('img');
        lightboxImg.id = 'lightbox-img';
        
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        // the images open the lightbox
        images.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
            });
        });

        lightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }
});
