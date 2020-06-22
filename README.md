# tamagotchi
PROJECT-ZERO - GENERAL ASSEMBLY - BY DEREK OSHITA 6/22


// --- Scope --- // 

The final objective is to build a tamagotchi game, where a user will interact with the tamagotchi in order to prevent it from dying.

Technologies in play: 
1. HTML
2. CSS
3. Vanilla JavaScript 
4. jQuery 


// --- User Story / Gameplay Logic --- // 

A user is defined as any individual who opens the tamagotchi page and interacts with it. 

1. The user will start by entering a name into the text field then clicking the "create" button. The button will store that name in an object and then create the object with all of it's values. 

2. Once the user clicks the button, an image will appear and the user will be prompted to name their tamagotchi. Once named, it will initiate a timer representing the tamagotchi's age. 

3. Three metrics will also be displayed: hunger, sleepiness, and boredom. Each metric will initiate at 0. The metrics will increment every two hours. If any of the metrics reach 10, the tamagotchi WILL PERISH. 

4. The user can decrement the value of each metric- hunger, boredom, and sleepiness will be decremented by feed, play, and turn off the lights respectively. Each click will represent 1 decrement in order to prevent any metric from reaching 10. 

5. Every 24 hours, the the pet wil morph/evolve, creating another stage. There will be three stages. 

6. The player wins if they can keep the tamagotchi alive through the third stage. 


// --- Wireframe --- // 

Please see file:

(./tamagotchi_protoype.pdf)


// --- Technical Requirements Checklist --- // 

- HAVE ITS OWN REPO, under your github account. NOT A FORK. (DONE)
- Git 20+ commits Commit early, commit often. Tell a story with your commits. Each message should give a clear idea what you changed.
- Include Wireframes and User Stories in the README (DONE)
- Wireframe: - Basically draw out what your game will look like—very different way it could look. You can use paper or any wireframe tool you find online.(DONE)
- User Stories - Wording should center around how a user interacts with your game, for example:
The user click starts and the level starts
When the user hits the f key a fire ball is catuplulated at a target. (DONE)
- Render a game in the browser
- Include separate HTML / CSS / JavaScript files (DONE)
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use JavaScript or jQuery for DOM manipulation
- Deploy your game online, where the rest of the world can access it (we will show you how)
- Use semantic markup for HTML and CSS (adhere to best practices)
- Be reasonably complex


// --- Specifications Checklist --- // 

- Create a repo for your tomagotchi pet (DONE)
- make a commit after you finish each one of the following
- Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
- Instatiate your Tomagotchi
- Display a character of your choice on the screen to represent your pet
- Display the following metrics for your pet:
Hunger (1-10 scale)
Sleepiness (1-10 scale)
Boredom (1-10 scale)
Age
- Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
- Add the ability to name your pet.
- Style the page.
- Increase your pet's age every x minutes
- Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
- You pet should die if Hunger, Boredom, or Sleepiness hits 10.
- Morph your pet at certain ages.
- Animate your pet across the screen while it's alive.




