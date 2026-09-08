document.addEventListener("DOMContentLoaded", () => {
    const termInput = document.getElementById('term-input');
    const termOutput = document.getElementById('term-output');

    if (!termInput || !termOutput) return;


const pages = {
    'whoami': '/blog/posts/whoami-wip.html',
    'commonplace': '/blog/posts/commonplace/commonplace-wall.html',
    'graphics': '/blog/posts/commonplace/graphics.html',
    'mar-26': '/blog/posts/mar-26.html',
    'oct-25': '/blog/posts/oct-25.html',
    'studying-forever': '/blog/posts/studying-forever.html',
    'nov-stuff': '/blog/posts/nov-stuff.html',
    'agua-viva': '/blog/posts/commonplace/agua-viva.html',
    'tractatus': '/blog/posts/commonplace/tractatus.html',
    'about': '/',
    'home': '/blog',
};

    const quotes = [
`"I want you to know, if you ever read this, there was a time when I would rather have had you by my side than any one of these words; I would rather have had you by my side than all the blue in the world.

But now you are talking as if love were a consolation. Simone Weil warned otherwise. 'Love is not consolation,' she wrote. 'It is light.'

All right then, let me try to rephrase. When I was alive, I aimed to be a student not of longing but of light."

— maggie nelson, bluets`,

        '"That this blue exists makes my life a remarkable one, just to have seen it. To have seen such beautiful things. To find oneself placed in their midst. Choiceless." - maggie nelson, bluets',

        `"Is my theme the instant? the theme of my life. I try to keep up with it, I divide thousands of times into as many times as the number of instants running by, fragmented as I am and the moments so fragile—my only vow is to life born with time and growing along with it: only in time itself is there room enough for me." - clarice lispector, àgua viva`,

        `"Every thing has an instant in which it is. I want to grab hold of the is of the thing. These instants passing through the air I breathe: in fireworks they explode silently in space."  - clarice lispector, àgua viva`,
        "3.02 The thought contains the possibility of the state of affairs which it thinks. What is thinkable is also possible.",

        "4.1212 What can be shown cannot be said.",

        "5.6 The limits of my language mean the limits of my world.",

        "7 Whereof one cannot speak, thereof one must be silent.",
    ];

    const music = [
        'Dummy - Portishead (album)',
        'Mezzanine - Massive Attack (album)',
        'Big Shot (Live at Glastonbury) - Fontaines D.C. (song)',
        "Landslide - The Smashing Pumpkins (song cover)",
        "Fisherman's Blues - The Waterboys (song)",
        "The Lion and the Cobra - Sinéad O'Connor (album)",
        "The Head Hurts but the Heart Knows the Truth - Headache (album)",
        "Actual Life 3 - Fred Again (album)",
        "On Every Street - Dire Straits (album)",
        "everything is alive - Slowdive (album)",
        "Teleharmonic - The Smile (song)",
        "Unmade - Thom Yorke (song)",
        "Five Years - David Bowie (song)",
        "Orchid - Black Sabbath (song)",
        "Man of War - Radiohead (song)",
        "Dollar Days - David Bowie (song)",
        "Plainsong - The Cure (song)",
        "All the Rage Back Home - Interpol (song)",
        "This Mess We're In - PJ Harvey, Thom Yorke (song)",
        "Leif Erikson - Interpol (song)",
        "Y tu te vas - La Femme (song)",
        "Obstacle 1 - Interpol (song)",
        "All Is Full Of Love - Live - Bjork (song)"
    ];

    const man = {
        'help': 'prints a list of available commands.',
        'musicrec': 'gives you a music recommendation! could be an album, could be a song.',
        'quote': 'prints a random quote.',
        'ls': 'lists directory contents.',
        'cd': 'changes the working directory. use with a page name to navigate (e.g., <b>cd whoami</b>).',
        'clear': 'clears the terminal screen.',
        'man': 'command manual (self-explanatory).',
        'theme': 'use with a theme name to change current theme.'
    };


const themes = [
        'light', 
        'amber', 
        'forest', 
        'midnight', 
        'chill-purple', 
        'terminal'
    ];

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const commands = {
        'help': () => 'try: music, quote, ls, cd [page], theme [theme], man [command], clear',
        'musicrec': () => `give <b>${getRandom(music)}</b> a listen !!`,
        'quote': () => getRandom(quotes),

        'ls': () => {
            return Object.keys(pages)
                .map(p => `<span style="display:inline-block; min-width: 120px; color: var(--text-color); font-weight: bold;">${p}</span>`)
                .join('');
        },

        'cd': (target) => {
            if (!target) return 'cd: missing page. try <b>ls</b> to see available pages.';
            if (pages[target]) {
                setTimeout(() => { window.location.href = pages[target]; }, 600);
                return `going to ${target}...`;
            }
            return `cd: ${target}: 404`;
        },

        'man': (target) => {
            if (!target) return 'what manual page do you want? (try <b>man ls</b>)';
            if (man[target]) {
                return `<b>NAME</b><br>&nbsp;&nbsp;&nbsp;&nbsp;${target} - ${man[target]}`;
            }
            return `no manual entry for ${target}`;
        },


'theme': (target) => {
    if (!target) {
        return `choose a theme; available themes are:<br><b>${themes.join(', ')}</b>`;
    }
    if (themes.includes(target)) {
        document.body.setAttribute('data-theme', target);
        localStorage.setItem('site-theme', target); 
        return `theme changed to <b>${target}</b>.`;
    }
    return `theme not found: ${target}. type <b>theme</b> to see available themes.`;
}

    };

termInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const inputVal = this.value.trim().toLowerCase();
        this.value = ''; 
        if (!inputVal) return;

        termOutput.innerHTML += `<p>> <b>${inputVal}</b></p>`;

        if (inputVal === 'clear') {
            termOutput.innerHTML = '';
        } else {
            const [cmd, ...argsArray] = inputVal.split(' ');
            const arg = argsArray.join(' ');

            const action = commands[cmd];

            const response = action ? action(arg) : `command not found: ${cmd}`;
            termOutput.innerHTML += `<p style="margin-bottom: 15px;">${response}</p>`;
        }

        termOutput.scrollTop = termOutput.scrollHeight;
    }
});
});
