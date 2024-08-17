const countElement = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

function updateCount() {
    countElement.textContent = count;
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateCount();
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCount();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCount();
});

updateCount();