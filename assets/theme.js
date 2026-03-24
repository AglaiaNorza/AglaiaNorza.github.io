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
