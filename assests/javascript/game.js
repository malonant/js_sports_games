let teamOneShootButton = document.querySelector("#teamone-shoot-button"); 
let teamOneNumberShots = document.querySelector("#teamone-numshots")
let teamonegoals = document.querySelector("#teamone-numgoals")
teamOneShootButton.addEventListener("click", function() {

    console.log("#teamone-shoot-button");
    let newnumbershot = Number(teamOneNumberShots.innerHTML) + 1
    teamOneNumberShots.innerHTML = newnumbershot

    var d = Math.random();
if (d < 0.5){
    let newgoals = Number(teamonegoals.innerHTML) + 1
    teamonegoals.innerHTML = newgoals 
    console.log("Good Goal!!!")
  }
})



let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button"); 
let teamTwoNumberShots = document.querySelector("#teamtwo-numshots")
let teamtwogoals = document.querySelector("#teamtwo-numgoals")
teamTwoShootButton.addEventListener("click", function() {

    console.log("#teamtwo-shoot-button");
    let newnumbershot = Number(teamTwoNumberShots.innerHTML) + 1
    teamTwoNumberShots.innerHTML = newnumbershot

    var d = Math.random();
if (d < 0.5){
    let newgoals = Number(teamtwogoals.innerHTML) + 1
    teamtwogoals.innerHTML = newgoals 
    console.log("Good Goal!!!")
}
  }) 

let resetbutton = document.querySelector("#reset-button")
let numberofresets = document.querySelector("#num-resets")

  resetbutton.addEventListener("click", function() {

    console.log("#reset-button");
    let resetbutton = Number(numberofresets.innerHTML) + 1
    numberofresets.innerHTML = resetbutton
    teamOneNumberShots.innerHTML = 0 
    teamTwoNumberShots.innerHTML = 0

  }) 