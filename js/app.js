// --- App State (Variables) --- // 

// Tamagotchi creator 

class Tamagotchi {
    constructor (tamagotchiName) {
    // properties 
        this.name = tamagotchiName || 'Charmander';
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

// Round creator? 

// Global Variables 



// Functions 

function createTamagotchi () {
    let name = $('#input-name').val(); 
    let newTamagotchi = new Tamagotchi(name);
    $(nameField).html(name); 
    $(ageField).html(0);   
    console.log(newTamagotchi); 
}; 

// function handleWindowPrompt () {

// }


// Cached DOM Elements 

// Create tamagotchi
let name = $('#input-name').val(); 
const createButton = $(`#create`); 

// Age and name
let nameField = $('#name'); 
let ageField = $('#age'); 


// Event listeners

// Create tamagotchi 
$(createButton).on('click', createTamagotchi); 