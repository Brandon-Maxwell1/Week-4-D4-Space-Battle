// DOM 



 

let ussWorld = {
        hull: 20,
        firepower: 5,
        accuracy: .7,
        remainingHull: true
}   

let invader = {
        hull: Math.round((Math.random() * (6 - 3)) + 3),
        firepower: Math.round((Math.random() * (4 - 2)) + 2),
        accuracy: (Math.random() * (.8 - .6)) + .6,
        remainingHull: true
}
 

    console.log("What are we waiting for?... LET'S GET THESE ALIEN!")

function battle(ussWorld, invader){ 
    let randNum = Math.random();
    // for(let i = 0; i<6; i++);
    do{

    }
    while (ussWorld.hull && invader.hull > 0) {        
        if (randNum < ussWorld.accuracy) {
            invader.hull = invader.hull - ussWorld.firepower;
            if(randNum > ussWorld.accuracy){

            }
        }else if(invader.hull <=0 && ussWorld.hull > 0){
            invader.remainingHull=false;
             console.log("Great shot, you've hit that alien punk! They're not making it home for dinner tonight!");             
        }else if(invader.hull >0){
             console.log("Nice shot, but the alien craft is still airborne.  Keep your aim steady and be ready to return fire!");             
            }else{
                return "You missed!! They're firing back!";  
            }
        
            if(invader.hull > 0){
                console.log("Nice shot, but the alien craft is still airborne.  Keep your aim steady and be ready to return fire!");                
                if(randNum < invader.accuracy){
                    ussWorld.hull = ussWorld.hull - invader.firepower;
                }else{
                    console.log("They missed! Great manuevering!");
                }
                    if(ussWorld.hull <=0){
                        ussWorld.remainingHull=false;
                        console.log("OH NO! We've lost to the aliens!");
                        console.log("GAME OVER");
                }else if(ussWorld.hull > 0){
                    console.log("We survived the hit.  Fire back at will!");
                    break;
                }
            }            
            if(invader.remainingHull > 0){
                console.log("The alien craft is still airborne.  Keep your aim steady and get ready for return fire!");

                // alienAttack;                
                // if(ussWorld.remainingHull){
                //     Console
                // }
            }
            // invader.attack(player);
        }
    }

battle(ussWorld, invader)


// if(invader.hull <=0){
        //         invader.remainingHull=false;
        //          console.log("Great shot, you've hit that alien punk! They're not making it home for dinner tonight!");
        //          break;




// // Example //
// if (move >= 3 && y === 'attack') {
//     res = 'Computers counter was successful! You took 10 damage';
//     yourHealth -= 10;
// } else if (move >= 3 && y === 'counter') {
//     res = 'Your counter was successful! Comp took 10 damage';
//     compHealth -= 10;
// } else if (move < 3 && y === 'attack') {
//     res = 'Computer counter failed! You dealt 15 damage!';
//     compHealth -= 15;
// } else if (move < 3 && y === 'counter') {
//     res = 'Your counter was not successful! You were delalt 15 damage!';
//     yourHealth -= 15;
// }

// if(alien.hull <=0){
// alien.remainingHull=false;




// let randNum = Math.random()
// let i = invader["ship1", "ship2", "ship3", "ship4", "ship5", "ship6"];
// for(let i = 0)




// // const battle = (player, computer) => {
// //     while (player.isAlive && computer.isAlive) {
// //         player.attack(computer);
// //         if (computer.isAlive) {
// //             computer.attack(player);
// //         }
// //     }
// // }
  

// // ussAttack(alien){
//     //         let invDodge = Math.random();        
//     //         console.log(`Targeting system has been compromised, current accuracy is at ${this.accuracy}, and the invader's evasive manuever success is at ${invDodge}`);
//     //         if(invDodge < this.accuracy){
//     //             console.log("Great shot, you've hit that alien punk");  
//     //             alien.hull = alien.hull - this.firepower;
//     //             this.console.log(`The alien craft is still airborne, our sensors indicate it has a hull strength of ${alien.hull} remaining.  Keep your aim steady and get ready for return fire!`)
//     //             if(alien.hull <=0){
//     //                 alien.remainingHull=false;
//     //                 console.log("Oh wow, really good shot.  That alien aint making home for dinner tonight!!")            
//     //             }        
//     //         }   else{
//     //         this.console.log("Oh no, you missed. Recalculate firing mechanisms and brace for return fire!!")
//     //         }
//     //     }
//     // }
  
  
 
  
//   function startGame(arr, obj) {
//     let i = 0;
//     while (i < arr.length && arr[i].hull > 0) {
//       // You attack the first alien ship
//       console.log(`YOU'RE ABOUT TO ATTACK THE ${i + 1} ALIEN`);
//       obj.attack(arr[i]);
//       if (arr[i].hull > 0) {
//         console.log(
//           `YOU WERE CLOSE!!! UNFORTUNATLY, THE ${
//             i + 1
//           } ALIEN SURVIVED AND IT'S ABOUT TO ATTACK YOU`
//         );
//         arr[i].attack(obj);
//         if (obj.hull < 0) {
//           return console.log("YOU LOST!");
//         }
//         console.log(
//           `HOPEFULLY!!! YOU SURVUVED BUT YOU LOST SOME HULL, YOUR CURRENT HULL IS ${obj.hull}, GET READY FOR THE NEXT BATTLE`
//         );
//         //retreat
//         if
//       } else i += 1;
//       console.log(`GOOD! THE ${i + 1} ALIEN HAS BEEN EXPLODED`);
//     }
//     return console.log("CONGRATULATION YOU KILLED ALL THE ALIENS YOU WON!");
//   }
  
//   startGame(alien, captain);
  
//   // If you destroy the ship, you have the option to attack the next ship or to retreat
  
//   // If you retreat, the game is over, perhaps leaving the game open for further developments or options
  
//   // You win the game if you destroy all of the aliens
  
//   // You lose the game if you are destroyed


























// =====Malek's help=====

// class ussWorld {
//     constructor(hull, firepower, accuracy) {
//       this.hull = hull;
//       this.firepower = firepower;
//       this.accuracy = accuracy;
//     }


// class Usscp extends Actor {
//     constructor(hull, firepower, accuracy) {
//       super(hull, firepower, accuracy);
//     }
//   }
  
//   class Alien extends Actor {
//     constructor(hull, firepower, accuracy) {
//       super(hull, firepower, accuracy);
//     }
//   }


// attack(target) {
//     target.hull = target.hull - this.firepower;
// }



// let randNum = Math.random();        
//     console.log(`Targeting system has been compromised, current accuracy is at ${this.accuracy}, and the invader's evasive manuever success is at ${randNum}`);
//     if(invDodge < this.accuracy){
//         console.log("Great shot, you've hit that alien punk");  
//         alien.hull = alien.hull - this.firepower;
//         this.console.log(`The alien craft is still airborne, our sensors indicate it has a hull strength of ${alien.hull} remaining.  Keep your aim steady and get ready for return fire!`)
//         if(alien.hull <=0){
//             alien.remainingHull=false;
//             console.log("Oh wow, really good shot.  That alien aint making home for dinner tonight!!")            
//         }        
//     }   else{
//     this.console.log("Oh no, you missed. Recalculate firing mechanisms and brace for return fire!!")
//     }







// const battle = (player, computer) => {
//     while (player.isAlive && computer.isAlive) {
//         player.attack(computer);
//         if (computer.isAlive) {
//             computer.attack(player);
//         }
//     }
// }










// const ussWorld = {
//     hull: 20,
//     firepower: 5,
//     accuracy: .7,
//     remainingHull: true,
//     ussAttack(alien){
//         let invDodge = Math.random();        
//         console.log(`Targeting system has been compromised, current accuracy is at ${this.accuracy}, and the invader's evasive manuever success is at ${invDodge}`);
//         if(invDodge < this.accuracy){
//             console.log("Great shot, you've hit that alien punk");  
//             alien.hull = alien.hull - this.firepower;
//             this.console.log(`The alien craft is still airborne, our sensors indicate it has a hull strength of ${alien.hull} remaining.  Keep your aim steady and get ready for return fire!`)
//             if(alien.hull <=0){
//                 alien.remainingHull=false;
//                 console.log("Oh wow, really good shot.  That alien aint making home for dinner tonight!!")            
//             }        
//         }   else{
//         this.console.log("Oh no, you missed. Recalculate firing mechanisms and brace for return fire!!")
//         }
//     }
// }

// const invader = {
//     hull: Math.round((Math.random() * (6 - 3)) + 3),
//     firepower: Math.round((Math.random() * (4 - 2)) + 2),
//     accuracy: (Math.random() * (.8 - .6)) + .6, //for later figure out a way to make it to the hundredth?
//     isAlive: true,
//     attack(target){
//         let ranNum = Math.random();
//         console.log(`The Earthlings are attacking at a ${ranNum} force`);
//         if (ranNum > this.accuracy) {
//             console.log(`Yooba dooba dooba, we've been hit`);
//             target.hull = target.hull - this.firepower;
//             console.log(`The human scum still has ${target.hull} hull points left.`);
//             if (target.hull <= 0) {
//                 target.isAlive=false;
//                 console.log(`AArrrggghhhhhhh`);

//             }
//         } else {
//             console.log(`Our superior intellegence has allowed us to dodged the human attack!`);
//         }
//     }   
// }
// let i = invader["ship1", "ship2", "ship3", "ship4", "ship5", "ship6"];
// let h = human;
// for (let i=0; i<6; i++){

// }























// function getRandomNum(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min)
//   }
  
// randHull=getRandomNum(3, 6);
// console.log(randHull)

// randFirepower=getRandomNum(2, 4);
// console.log(randFirepower)

// randFirepower=getRandomNum(.6, .8);
// console.log(randAccuracy)



























