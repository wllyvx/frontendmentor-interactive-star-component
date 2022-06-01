const submit_btn = document.querySelector('.submit-btn');
const rating_state = document.querySelector('.rating-state');
const thanks_state = document.querySelector('.thanks-state');
const ratingBtns = document.querySelectorAll('.rating-btn');
let score = document.querySelector('.rating-score');

submit_btn.addEventListener('click', onSubmit);

ratingBtns.forEach ((star, i) => {
    star.onclick = function() {
        score.innerText = i+1;
    }
})

function onSubmit() {
    rating_state.classList.add('hidden');
    thanks_state.classList.remove('hidden');
    thanks_state.classList.add('flex');
    
}

function onRating() {
    console.log(ratingBtns.value);

}