// Global Variables
let currentScore = 0;
let userProgress = [];

// Activity Data Arrays
const letterMatchData = ['A', 'B', 'C', 'D'];
const listenChooseData = ['cat', 'dog', 'bird', 'fish'];
const wordBuilderData = ['apple', 'banana', 'grape', 'orange'];

// Navigation Functions
function navigateToActivity(activityName) {
    console.log('Navigating to: ' + activityName);
    // Implement navigation logic based on activityName
}

// Letter Match Activity
function letterMatch() {
    letterMatchData.forEach(letter => {
        console.log('Match this letter: ' + letter);
    });
}

// Listen and Choose Activity
function listenAndChoose() {
    listenChooseData.forEach(item => {
        console.log('Listen and select: ' + item);
    });
}

// Drag and Drop Functionality
function setupDragAndDrop() {
    console.log('Setting up drag and drop functionality.');
    // Implement drag and drop logic
}

// Story Reader
function storyReader(story) {
    console.log('Reading story: ' + story);
}

// Word Builder
function wordBuilder() {
    wordBuilderData.forEach(word => {
        console.log('Build this word: ' + word);
    });
}

// Speak Practice
function speakPractice(word) {
    console.log('Practice speaking: ' + word);
}

// Rewards System
function grantReward() {
    currentScore += 10;
    console.log('Reward granted! Current Score: ' + currentScore);
}

// Progress Tracking
function trackProgress(activity) {
    userProgress.push(activity);
    console.log('Progress tracked for: ' + activity);
}