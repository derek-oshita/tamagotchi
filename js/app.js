// --- App State (Variables) --- // 

// Tamagotchi creator 

class Tamagotchi {
    constructor (tamagotchiName) {
    // properties 
        this.name = tamagotchiName;
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

// --- Global Variables --- // 

// Not assigned until createTamagotchi() fires. 

let round = 1; 
let ageFieldPlaceholder = 0; 
let tamagotchi; 
let tamagotchiName; 
let tamagotchiAge; 
let tamagotchiBoredom; 
let tamagotchiHunger; 
let tamagotchiSleepiness; 

// --- Functions --- // 

// Create tamagotchi - global variables don't get assigned until the user creates a tamagotchi 

function handleTamagotchi () {
    let nameInput = $('#input-name').val(); 
    // assigning of values from new object to global variables
    tamagotchi = new Tamagotchi (nameInput); 
    tamagotchi.name = nameInput || 'Charmander'; 
    tamagotchiName = nameInput || 'Charmander'; 
    tamagotchiAge = tamagotchi.age; 
    tamagotchiBoredom = tamagotchi.boredom; 
    tamagotchiHunger = tamagotchi.hunger; 
    tamagotchiSleepiness = tamagotchi.sleepiness; 
    // inserting those values to the DOM using jQuery 
    $(nameField).html(tamagotchiName);
    $(ageField).html(tamagotchiAge); 
    $(boredomField).html(tamagotchiBoredom); 
    $(hungerField).html(tamagotchiHunger); 
    $(sleepinessField).html(tamagotchiSleepiness);   
    console.log(tamagotchiAge); 
}; 

// Start Timer 

function handleTimer () {
    const timer = setInterval ( function () {
        // Use the timer to increment tamagotchiAge by seconds 
        tamagotchiAge++;
        // Create a functin that converts that time into minutes 
        // $(ageField).html(`${tamagotchiAge} minutes old.`); 
        updateAgeField (tamagotchiAge); 
        updateBoredom (tamagotchiAge); 
        updateHunger (tamagotchiAge); 
        updateSleepiness (tamagotchiAge); 
        console.log(tamagotchiAge); 
    }, 1000); 
}; 

// Update Age Field (not the actual value of tamagotchiAge, that needs to continue to increment )

function updateAgeField (time) {
    if (time % 10 === 0) {
        ageFieldPlaceholder += 1; 
        $(ageField).html(`${ageFieldPlaceholder} minutes old.`)
    }
}


// Update Boredom

function updateBoredom (time) {
    if ( time % 10 === 0) {
        tamagotchiBoredom += 1;
        $(boredomField).html(tamagotchiBoredom);  
    }
}; 

// Update Hunger 

function updateHunger (time) {
    if ( time % 10 === 0) {
        tamagotchiHunger += 1;
        $(hungerField).html(tamagotchiHunger);  
    }
}; 

// Update Sleepiness

function updateSleepiness (time) {
    if ( time % 10 === 0) {
        tamagotchiSleepiness += 1;
        $(sleepinessField).html(tamagotchiSleepiness);  
    }
}; 

// Increment condition: 
// 3600 secs / hour 
// every 6 minutes = 360 secs
// use modulus 
// if ( (time % 360) === 0) {tamagotchiBoredom++; $(boredomField).html(tamagotchiBoredom);   }

// --- Cached DOM Elements --- // 

// Tamagotchi Details
const nameField = $('#name'); 
const ageField = $('#age'); 

// Tamagotchi Metrics
const boredomField = $('#boredom'); 
const hungerField = $('#hunger'); 
const sleepinessField = $('#sleepiness');  

// Buttons 
const createButton = $('#create'); 
const playButton = $('#play'); 
const feedButton = $('#feed'); 
const turnOffButton = $('#turn-off'); 

// Stage details 
const stageField = $('#stage'); 
const completedField = $('#completed'); 


// --- Event listeners --- // 

// Create tamagotchi 
$(createButton).on('click', handleTamagotchi); 
$(createButton).on('click', handleTimer); 

// User actions 

