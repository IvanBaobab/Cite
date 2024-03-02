const tds = document.querySelectorAll('td');

let letters = 'abcdefgh';
let numbers = '12345678';

let place = document.getElementById('place');
let timer = document.getElementById('timer');
let result = document.getElementById('result');


function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function ohterCor() {
    let new_x = letters[getRandomInt(7)];
    let new_y = numbers[getRandomInt(7)];
    place.innerText = new_x+new_y;
    timer.textContent = 10;
}

setInterval(() => {
    timer.innerText = +timer.textContent - 1;
    if (timer.textContent <= 0){
        ohterCor();
    }       
},1000);



tds.forEach(cell => {
    cell.addEventListener('click', () => {
        let x = letters[cell.cellIndex];
        let y = numbers[7-cell.closest('tr').rowIndex];
        let crd = x + y;

        if (place.textContent == crd) {
            result.innerText = +result.textContent + 1;
            ohterCor();
        } else{
            result.innerText = +result.textContent - 1;
            if (result.textContent <= 0) {
                result.textContent = 0;
            }
        }
        
    });
});
