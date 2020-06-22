// --- App State (Variables) --- // 



// Tamagotchi creator 

class Tamagotchi {
    constructor (name) {
    // properties 
        this.name = name || 'Charmander';
        this.age = 0; 
        this.boredom = 0; 
        this.hunger = 0; 
        this.sleepiness = 0; 
    }
    // instance methods
    // play - needs play button click event as argument 
    play () {
        this.boredom = this.boredom--; 
    }; 
    // feed - needs feed button click event as argument
    feed () {
        this.hunger = this.hunger--; 
    }; 
    // turn off - needs turn off button clicke event as argument
    turnOff () {
        this.sleepiness = this.sleepiness--; 
    };
}; 

// const test = new Tamagotchi('Mila'); 
// console.log(test); 