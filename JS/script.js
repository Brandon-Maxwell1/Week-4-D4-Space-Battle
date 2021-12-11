class SpaceCraft{
    constructor(pilot, hull, firepower, accuracy){
        this.pilot = pilot
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
}

let hero = document.getElementById("hero");
document.addEventListener("click",attack);
function attack(){
    hero.classList.add("animate");
    setTimeout(removeJump,300); //300ms = length of animation