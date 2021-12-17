// DOM Entries //
const fight = document.getElementsByClassName("fightButton")


// create dom to get alien attributes to change according to values assigned by Math.random()

// create dom 

//===================

class Ussship {
    constructor (name, hull, firepower, accuracy, type) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.type = type; 
    }

    //if enemy acc < Math.random, subtract firepower from enemy's hull 
    attack(target){
        let checkAgainst = Math.random()
        if(target.accuracy < checkAgainst){            
            target.hull -= this.firepower
            if(target.type === "CPU"){
                console.log(`Attack hit ${target.name}! \nHull: ${target.hull}`)
            // }else{
            //     console.log(`Attack Landed! \nHull: ${target.hull}`)
            }
        }else{
            console.log(`Attack missed!, ${target.type} attacks now!`)
        }
       if(target.hull < 1){
           return true; 
       } else{
           return false; 
       }
    }
}

class Alienship  extends Ussship{
    constructor (name, hull, firepower, accuracy, type) {
        super(name, hull, firepower, accuracy, type)
    }
}  

let ussschwartz = new Ussship('Ussschwartz', 20, 5, .7, "Player 1")

let alienShips = []
for( let i = 0; i < 6; i++){
    let alienHp = Math.round((Math.random() * (6 - 3)) + 3)
    let alienFp = Math.round((Math.random() * (4 - 2)) + 2)
    let alienAcc = (Math.random()* (2) + 6) / 10
    alienShips.push(new Alienship (`CPU${i+1}`, alienHp, alienFp, alienAcc, "CPU"))
}

let battleBegin = null; 
while(battleBegin !== ("yes" || "no")){
    battleBegin = window.prompt("The aliens are ready to jump us. Do you want to start the battle?:", "yes/no")
    console.log(battleBegin)    
}

let attackOrRetreat = null;
if(battleBegin === "yes"){
    let activeEnemy = 0; 
    while(ussschwartz.hull > 0){
        // attackOrRetreat = null; 
        while(attackOrRetreat === "attack" && "retreat"){
            attackOrRetreat = window.prompt("Would you like to attack or retreat?", "attack/retreat")
        }
        if(attackOrRetreat !== "retreat"){
            if(ussschwartz.attack(alienShips[activeEnemy])){
                activeEnemy++;
                console.log("Enemy destroyed!") 
            }else{
                alienShips[activeEnemy].attack(ussschwartz)
            }
            
        }else{
            window.prompt("We are retreating")
            console.log("We are retreating")
        }
        // setTimeout(function(
    }    
}


//========================




// class Ussship {
//     constructor (name, hull, firepower, accuracy, type) {
//         this.name = name;
//         this.hull = hull;
//         this.firepower = firepower;
//         this.accuracy = accuracy;
//         this.type = type; 
//     }
// }
// class Alienship  extends Ussship{
//     constructor (name, hull, firepower, accuracy, type) {
//         super(name, hull, firepower, accuracy, type)
//     }
// }  

// let ussschwartz = new Ussship('Ussschwartz', 20, 5, .7, "Player")

// let alienShips = []
// for( let i = 0; i < 6; i++){
//     let alienHp = Math.round((Math.random() * (6 - 3)) + 3)
//     let alienFp = Math.round((Math.random() * (4 - 2)) + 2)
//     let alienAcc = (Math.random()* (2) + 6) / 10
//     alienShips.push(new Alienship (`CPU${i+1}`, alienHp, alienFp, alienAcc, "CPU"))
// }

// let battleBegin = null; 
// while(battleBegin !== ("yes" || "no")){
//     battleBegin = window.prompt("The aliens are ready to jump us. Do you want to start the battle?:", "yes/no")
//     console.log(battleBegin)    
// }


//     function Battle(target){
//     function ussAttack(alienTarget) {        
//         let attackKilledAlien = (this.accuracy < Math.random()) && (target.hull-this.firepower <= 0);
//         let attackAlienAlive = (this.accuracy < Math.random()) && (target.hull-this.firepower > 0);
//     }
//     function alienAttack(humanTarget) {        
//         let attackKilledHuman = (this.accuracy > (Math.random()* (2) + 6) / 10) && (target.hull-this.firepower <= 0);
//         let attackHumanAlive = (this.accuracy > (Math.random()* (2) + 6) / 10) && (target.hull-this.firepower > 0);
//     }
//     while(ussschwartz.hull || alienShips[i] > 0){
//     if(attackKilledAlien === true){
//         let fightOrRetreat = null;
//         while(fightOrRetreat !== ("yes" || "no")){
//             battleBegin = window.prompt("You took one out.  Would you like to continue the fight or retreat?:", "fight/retreat")
//             console.log(fightOrRetreat)
//         // window.prompt(`You destroyed ${alienTarget.name}: Would you like to  "yes/no"`)
//         console.log(`We destroyed ${alienTarget.name}! \nHull: ${alienTarget.hull}`)   
//         // let fightOrRetreat = null;     
//         }if(attackAlienAlive === true){
//         console.log(`We hit ${alienTarget.name}! But they're still airborn. \nHull: ${alienTarget.hull}`)
//         }else{        
//         console.log(`We missed ${alienTarget.name}! Prepare for return fire! \nHull: ${alienTarget.hull}`)
//     }
//     while(alienShips[i] > 0){
//     if(attackKilledHuman === true){
//         window.prompt(`Yooba dooba dooba!!! You destroyed the human! We can now use the Earth as a vacation spot.`)
//         console.log(`Humans have been defeated`)        
//         }else if(attackHumanAlive === true){
//         console.log(`We hit the human scum, but they still live. \nHull: ${humanTarget.hull}`)
//         }else{        
//         console.log(`We missed the vile human!! Prepare for return fire! \nHull: ${humanTarget.hull}`)
//         }
//     }
// }
//     }
// }






    