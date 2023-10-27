//консультация
document.getElementById("consult-pop-up-opener").addEventListener("click",function (){
    document.getElementById("consult-pop-up").classList.add("open")
})
document.getElementById("get-consult__close-btn").addEventListener("click",function (){
    document.getElementById("consult-pop-up").classList.remove("open")
})
document.querySelector("#consult-pop-up .get-consult__container").addEventListener('click', event => {
    event._isClickWithModal = true
})
document.querySelector("#consult-pop-up").addEventListener('click', event => {
    if (event._isClickWithModal) return;
    event.currentTarget.classList.remove('open')
})

//обратный звонок
document.getElementById("feedback-pop-up-opener").addEventListener("click",function (){
    document.getElementById("feedback-pop-up").classList.add("open")
})
document.getElementById("feedback-pop-up-opener-footer").addEventListener("click",function (){
    document.getElementById("feedback-pop-up").classList.add("open")
})
document.getElementById("feedback__close-btn").addEventListener("click",function (){
    document.getElementById("feedback-pop-up").classList.remove("open")
})
document.querySelector("#feedback-pop-up .feedback__container").addEventListener('click', event => {
    event._isClickWithModal = true
})
document.querySelector("#feedback-pop-up").addEventListener('click', event => {
    if (event._isClickWithModal) return;
    event.currentTarget.classList.remove('open')
})