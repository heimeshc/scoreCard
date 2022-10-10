//Buttons for home
const addOneH = document.querySelector(".oneH")
const addTwoH = document.querySelector(".twoH")
const addThreeH = document.querySelector(".threeH")

//Buttons for Guest
const addOneG = document.querySelector(".oneG")
const addTwoG = document.querySelector(".twoG")
const addThreeG = document.querySelector(".threeG")

//For updating score cards
const homeScore = document.querySelector(".score-cardHome")
const guestScore =  document.querySelector(".score-cardGuest")

//Variable for changing the scores
let hScore = 0
let gScore = 0

//Updating values for home after clicks
addOneH.addEventListener("click", function(){
    hScore += 1;
    homeScore.textContent = hScore;
})

addTwoH.addEventListener("click", function(){
    hScore += 2;
    homeScore.textContent = hScore;
})

addThreeH.addEventListener("click", function(){
    hScore += 3;
    homeScore.textContent = hScore;
})

//Updating values for guest after clicks
addOneG.addEventListener("click", function(){
    gScore += 1;
    guestScore.textContent = gScore;
})

addTwoG.addEventListener("click", function(){
    gScore += 2;
    guestScore.textContent = gScore;
})

addThreeG.addEventListener("click", function(){
    gScore += 3;
    guestScore.textContent = gScore;
})