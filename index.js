// Write your code in this file!
const currentUser = 'Grace Hopper';// Declare currentUser

// Build welcome message using interpolation and add "!"
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Make an all-uppercase version of welcomeMessage
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Short greeting that uses only the first initial of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
