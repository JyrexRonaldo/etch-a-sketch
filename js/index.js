const container = document.querySelector('.container');
const button = document.querySelector('button');
let size = 0;

button.addEventListener('click', () => {
    size = +prompt('Enter number of squares?');
    if (size > 100) {
        alert('Squares cannot exceed 100 per side');
        return;
    }
});

for (let i = 0; i <= 10000; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `hsl(${randomHue()}, 100%, 50%)`;
    });

    button.addEventListener('click', () => {
        if (size > 100) {
            return;
        }
        div.style.backgroundColor = 'white';
        div.style.height = `${600 / size}px`;
        div.style.width = `${600 / size}px`;
    });

}

function randomHue() {
    let deg = Math.floor(Math.random() * 360);
    return deg;
}
