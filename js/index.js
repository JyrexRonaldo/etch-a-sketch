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
    let lightnessVal = 100;
    div.addEventListener('mouseover', (e) => {
        if (e.target.style.backgroundColor = true) {
            while (count <= 9) {
                lightnessVal = lightnessVal - 10;
                e.target.style.backgroundColor = `hsl(${randomHue()}, 100%, ${lightnessVal}%)`;
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
        lightnessVal = 100;
    });

}

function randomHue() {
    let deg = Math.floor(Math.random() * 360);
    return deg;
}
