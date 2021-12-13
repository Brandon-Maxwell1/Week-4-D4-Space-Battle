console.log("What are we waiting for?... LET'S GET THESE ALIEN!")

const ussWorld = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    remainingHull: true,
    ussAttack(alien){
        let invDodge = Math.random();        
        console.log(`Targeting system has been compromised, current accuracy is at ${this.accuracy}, and the invader's ivade ability is at ${invDodge}`);
        if(invDodge < this.accuracy){
            console.log("Great shot, you've hit that alien punk");  
            alien.hull = alien.hull - this.firepower;
            this.console.log(`The alien craft is still airborne, our tools indicate it has a hull strength of ${alien.hull} remaining!`)
            if(alien.hull <=0)                    {
                alien.remainingHull=false;
                console.log("")

                console.log("Oh wow, really good shot.  That alien aint making home for dinner tonight!!")
            }
        
    }
}

console.log("Oh no, you missed. Recalculate firing mechanisms and brace for return fire!!");
    

// }

const invader = {
    hull: Math.round((Math.random() * (6 - 3)) + 3),
    firepower: Math.round((Math.random() * (4 - 2)) + 2),
    accuracy: (Math.random() * (.8 - .6)) + .6, //for later figure out a way to make it to the hundredth?
}
























// function getRandomNum(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min)
//   }
  
// randHull=getRandomNum(3, 6);
// console.log(randHull)

// randFirepower=getRandomNum(2, 4);
// console.log(randFirepower)

// randFirepower=getRandomNum(.6, .8);
// console.log(randAccuracy)



























