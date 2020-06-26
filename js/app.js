// --- App State (Variables) --- // 

// Class - tamagotchi creator 

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
    play() {
        this.boredom -= 1; 
    }; 
    feed() {
        this.hunger -= 1; 
    }; 
    turnOff() {
        this.sleepiness -= 1; 
    };
}; 

// --- Global Variables --- // 

// hardcoded variables
let round = 1; 
let ageFieldPlaceholder = 0; 
// global variables don't get assigned until the user fires createTamagotchi(); 
let tamagotchi; 
let tamagotchiName; 
let tamagotchiAge; 
let tamagotchiBoredom; 
let tamagotchiHunger; 
let tamagotchiSleepiness; 

// --- Functions --- // 

// Handle tamagotchi 

function handleTamagotchi() {
    // saving the value of whatever they put into the text box
    let nameInput = $('#input-name').val(); 
    // assigning the values from new object to global variables
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
    // message bubble changes 
    messageBubble.html(`Get ${tamagotchiName} to 30 seconds old and keep your metrics under 10 to win.`)
    // fyi 
    console.log(tamagotchi); 
    // edge case to ensure only one object is created and the timer can only be started once
    $(createButton).off('click', handleTamagotchi); 
    $(createButton).off('click', handleTimer); 
}; 

// Handle timer - the source of truth for the gameplay logic 

function handleTimer() {
    const timer = setInterval ( function() {
        // Use the timer to increment tamagotchiAge and tamagotchi.age property by seconds 
        tamagotchiAge++;
        tamagotchi.age++; 
        // converts age into minutes and adjusts the field every minute
        updateAgeField(tamagotchiAge); 
        // updates all of the metrics according to the tamagotchiAge variable
        updateBoredom(tamagotchiAge); 
        updateHunger(tamagotchiAge); 
        updateSleepiness(tamagotchiAge); 
        // change round and determine if player wins or loses
        updateRound(); 
        determineResults(); 
        // exit game 
        if (tamagotchiAge >= 30) {
            clearInterval(timer); 
            $(playButton).off('click', play); 
            $(feedButton).off('click', feed); 
            $(turnOffButton).off('click', turnOffLights); 
        }
    }, 1000); 
}; 

// Update round

function updateRound() {
    $(roundField).html(round); 
    // change modulus value to adjust the length of each round
    if ( (tamagotchiAge % 10 === 0) && (tamagotchiBoredom < 10) && (tamagotchiHunger < 10) && (tamagotchiSleepiness < 10) ) {
        round += 1; 
        $(roundField).html(round);
        $(nameField).html(`${tamagotchiName}`) 
    }
    updateImage(round); 
    if (round === 3) {
        $(nameField).html(`${tamagotchiName}`)
    }
    if (round > 3) {
        $(roundField).html('You win!'); 
        $(nameField).html(`${tamagotchiName}`); 
        return; 
    }
}; 

// Flash image 

function flashNewImage () {
    $('#charmander').attr('class', 'animate__animated animate__flash')
};

// Bounce in image 

function bounceInNewImage () {
    $('#charmander').attr('class', 'animate__animated animate__bounceIn')
}; 

// Update image 

function updateImage(round) {
    if (round === 2) {
        // update and animate image 
        $('#charmander').attr('src', 'https://ya-webdesign.com/images600_/bulbasaur-vector-svg-14.png');
        flashNewImage();  
        // changing the value of tamagotchiName and tamagotchi name property when the round changes
        if (tamagotchiName === 'Charmander') {
            tamagotchiName = 'Charmeleon'; 
            tamagotchi.name = 'Charmeleon'; 
            // update the message bubble for default value 
            $(messageBubble).html(`Charmander evolved into ${tamagotchiName}!`)
        // update the message bubble for custom name value 
        } else if (tamagotchiName !== 'Charmeleon') {
            $(messageBubble).html(`${tamagotchiName} evolved into Charmeleon!`)
        } 
    } else if (round === 3) {
        // update and animate image 
        $('#charmander').attr('src', 'https://pm1.narvii.com/5805/58e2f0439b8b7bfa3fcfc57e2669238682dc6bbe_hq.jpg'); 
        bounceInNewImage(); 
        // changing the value of tamagotchiName and tamagotchi name property when the round changes
        if (tamagotchiName === 'Charmeleon') {
            tamagotchiName = 'Charizard'; 
            tamagotchi.name = 'Charizard'; 
            // update the message bubble for default value 
            $(messageBubble).html(`Charmeleon evolved into ${tamagotchiName}!`)
        // update the message bubble for custom name value 
        } else if (tamagotchiName !== 'Charizard') {
            $(messageBubble).html(`${tamagotchiName} evolved into Charizard!`)
        } 
    }
}; 

// Determine results 

function determineResults() {
    // conditional check for winning the game 
    if ( (tamagotchiAge === 30) && (tamagotchiBoredom < 10) && (tamagotchiHunger < 10) && (tamagotchiSleepiness < 10) ) {
        $(messageBubble).html(`${tamagotchiName} is now ${ageFieldPlaceholder} seconds old. You win!`); 
        return;
    // user loses if boredom reaches 10 
    } else if (tamagotchiBoredom >= 10) {
        $(messageBubble).html(`You forgot to play with ${tamagotchiName}. ${tamagotchiName} has died of boredom. :(`); 
        return; 
    // user loses if hunger reaches 10 
    } else if (tamagotchiHunger >= 10) {
        $(messageBubble).html(`You forgot to feed ${tamagotchiName}. ${tamagotchiName} has died of hunger. :(`); 
        return; 
    // user loses if sleepiness reaches 10
    } else if (tamagotchiSleepiness >= 10 ) {
        $(messageBubble).html(`You forgot to turn off the lights so ${tamagotchiName} could sleep. ${tamagotchiName} has died of insomnia. :(`); 
        return; 
    } 
}; 

// Update age field - you can change % modulus value to conver the age into minutes if you want your game to run longer. This ensures that tamagotchiAge continues to increment by the second. 

function updateAgeField(time) {
    if (time % 1 === 0) {
        ageFieldPlaceholder += 1; 
        if (ageFieldPlaceholder < 2) {
            $(ageField).html(`${ageFieldPlaceholder} second old`)
        } else {
            $(ageField).html(`${ageFieldPlaceholder} seconds old`)
        }
    } 
}; 

// Update boredom

function updateBoredom(time) {
    if (time % 3 === 0) {
        tamagotchiBoredom += 1;
        tamagotchi.boredom += 1; 
        $(boredomField).html(tamagotchiBoredom);  
    }
}; 

// Update hunger 

function updateHunger(time) {
    if (time % 3 === 0) {
        tamagotchiHunger += 1;
        tamagotchi.hunger += 1; 
        $(hungerField).html(tamagotchiHunger);  
    }
}; 

// Update sleepiness

function updateSleepiness(time) {
    if (time % 3 === 0) {
        tamagotchiSleepiness += 1;
        tamagotchi.sleepiness += 1; 
        $(sleepinessField).html(tamagotchiSleepiness);  
    }
}; 

// Play!

function play() {
    // edge case to ensure you can't run play if boredom is < 1
    if ( (tamagotchiBoredom || tamagotchi.boredom) < 1 ) {
        return; 
    }; 
    // adjust variable values, message bubble, and object properties  
    tamagotchiBoredom -= 1; 
    tamagotchi.play(); 
    $(boredomField).html(tamagotchiBoredom); 
    $(messageBubble).html(`You played with ${tamagotchiName}.`); 
    console.log(tamagotchi);
}; 

// Feed!

function feed() {
    // edge case to ensure you can't run feed if hunger is < 1
    if ( (tamagotchiHunger || tamagotchi.hunger) < 1 ) {
        return; 
    }; 
    // adjust variable values, message bubble, and object properties  
    tamagotchiHunger -= 1; 
    tamagotchi.feed(); 
    $(hungerField).html(tamagotchiHunger); 
    $(messageBubble).html(`${tamagotchiName} ate a snack.`)
    console.log(tamagotchi)
}; 

// Turn off lights! 

function turnOffLights() {
    // edge case to ensure you can't run turnOffLights if sleepiness is < 1
    if ( (tamagotchiSleepiness || tamagotchi.sleepiness) < 1 ) {
        return; 
    };
    // adjust variable values, message bubble, and object properties  
    tamagotchiSleepiness -= 1; 
    tamagotchi.turnOff(); 
    $(sleepinessField).html(tamagotchiSleepiness); 
    $(messageBubble).html(`ZZZZZZzzzzzz`)
    console.log(tamagotchi)
    // easter egg ;)
    darkMode(); 
}; 

// Dark mode - nested function for turnOffLights
// Animation library by Animate.style

function darkMode() {
    $('body').css('background-image', 'url(https://download.hipwallpaper.com/desktop/1920/1080/6/21/EmFuTR.png)'); 
    $('[id=dark-mode]').addClass('animate__animated animate__fadeIn');
    $('.metric-container').addClass('animate__animated animate__fadeIn');
    $('.metric-container').css('background-image', 'url(https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/104940799_3259354584104142_7756547770047346504_n.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=EaV1GEMQUBkAX_uKT0n&_nc_ht=scontent-sjc3-1.xx&oh=4c71a3ac19d5a077ff1cdc73c861d1e2&oe=5F195F28)');
    $('.button-container').addClass('animate__animated animate__fadeIn');
    $('.button-container').css('background-image', 'url(https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/104827204_3259355104104090_417054165595891729_n.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=THCHb6GeR7MAX_k4XfB&_nc_ht=scontent-sjc3-1.xx&oh=689251726272dd8f39010720b6f2acf0&oe=5F18863A)'); 
    $('footer').addClass('animate__animated animate__fadeIn')
}; 

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

// Round details 
const roundField = $('#round'); 

// Message bubble 
const messageBubble = $('#message-bubble'); 

// --- Event listeners --- // 

// Create tamagotchi 
$(createButton).on('click keypress', handleTamagotchi); 
$(createButton).on('click', handleTimer); 

// User actions 
$(playButton).on('click', play); 
$(feedButton).on('click', feed); 
$(turnOffButton).on('click', turnOffLights); 

