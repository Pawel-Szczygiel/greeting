
const h1 = document.querySelector('h1');
const idx = 12;
const hello = ['i,','H'];
const heading = ['I',"'m",'&nbsp','P','a','w','e','ł'];


function animateText() {

    hello.forEach( (char,i) => {
        const span = document.createElement('span');
        span.className = `text-animate _${idx - i - 1 * 1 }`;
        span.textContent = char;
        h1.prepend(span);

        if (i == 1) h1.append(document.createElement('br'));
        
    });

    heading.forEach( (char,i) => {
        const span = document.createElement('span');
        span.className = `text-animate _${idx + i}`;
        span.innerHTML = char;
        h1.append(span);
    });

    setTimeout(() => {
        const spans = document.querySelectorAll('h1 span');
        spans.forEach((span => span.className ='text-animate-hover'));
    }, 4000)
    
}


window.addEventListener( 'DOMContentLoaded', () => animateText() );


