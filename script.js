const greetings = [
  "Hey there!",
  "Hello, champion!",
  "Hi, amazing soul!",
  "Greetings, warrior!",
  "What’s up, legend?"
];

const verbs = [
  "Keep pushing forward",
  "Never stop growing",
  "Stay strong and steady",
  "Believe in your journey",
  "Rise above the challenge"
];

const subjects = [
  "because you are destined for greatness",
  "as every step counts",
  "since your potential is limitless",
  "because you've got what it takes",
  "as the universe is on your side"
];

const encouragements = [
  "No mountain is too high",
  "Every setback is a setup for a comeback",
  "You're doing better than you think",
  "Even small progress is progress",
  "Courage is your superpower"
];

const callsToAction = [
  "Now go make today amazing!",
  "Let your light shine!",
  "Take that first step!",
  "Inspire someone today!",
  "You've got this—go get it!"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateMessage() {
  const message = `${getRandomItem(greetings)} ${getRandomItem(verbs)}, ${getRandomItem(subjects)}. ${getRandomItem(encouragements)}. ${getRandomItem(callsToAction)}`;
  document.getElementById('message').textContent = message;
}
