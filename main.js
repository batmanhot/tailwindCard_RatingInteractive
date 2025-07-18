const submitBtn = document.querySelector('#submit-btn')
const selectCard = document.querySelector('#select')
const thanksyouCard = document.querySelector('#thank-you')
const circlesBtn = document.querySelectorAll('.circle')
const scoreCard = document.querySelector('#score')

circlesBtn.forEach(circleBtn => {
    circleBtn.addEventListener('click', (e)=> {
        //Resetear Stylos
        circlesBtn.forEach(circleBtn => {
            circleBtn.classList.remove('bg-Grey-500');
            circleBtn.classList.remove('text-White')    
        })
        // Cambiar el stylo ...
        circleBtn.classList.add('bg-Grey-500');
        circleBtn.classList.add('text-White')

        // Actualizando el valor seleccionado en el span
        scoreCard.innerHTML=e.target.innerText

        submitBtn.addEventListener('click',()=> {        
            selectCard.classList.add('hidden')
            thanksyouCard.classList.remove('hidden')
        })
    })
} )





