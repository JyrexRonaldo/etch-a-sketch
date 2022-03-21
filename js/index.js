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
    let count = 0;
    let n = 100;
    div.addEventListener('mouseover', (e) => {
        if (e.target.style.backgroundColor = true) {
            while (count <= 9) {
                n = n - 10;
                console.log(n);
                e.target.style.backgroundColor = `hsl(${randomHue()}, 100%, ${n}%)`;
                break;        
            }
            count++;   
        }
    });

    button.addEventListener('click', () => {
        if (size > 100) {
            return;
        }
        div.style.backgroundColor = 'white';
        div.style.height = `${600 / size}px`;
        div.style.width = `${600 / size}px`;
        count = 0;
        n = 100;
    });

}

function randomHue() {
    let deg = Math.floor(Math.random() * 360);
    return deg;
}
