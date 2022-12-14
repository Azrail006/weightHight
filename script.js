const weight = document.querySelector('#weight');
const hight = document.querySelector('#hight');
const button = document.querySelector('.btn');



button.addEventListener('click', () => {
    const result = calculateWeightHeight(Number(weight.value), Number(hight.value))

    if (Math.sign(result) === 1) {
        alert('Вам нужно похудеть');
    } else if (Math.sign(result) === -1) {
        alert('Вам нужно набрать вес');
    } else { 
        alert('У вас идеальный вес');
    }
});




function calculateWeightHeight(weight, hight) {
    return weight - (hight - 110);
}
