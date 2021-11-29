const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Set difficulty to value in ls or medium
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// Set difficulty select value
difficultySelect.value =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}
var timeoutID;

function showAlert() {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!'); // Set Timeout
}

function clearAlert() {
    clearTimeout(timeoutID);  // Set Timeout
}

// Game over, show end screen
function gameOver() {  
  // Fixes dual-screen position                         Most browsers      Firefox  
  // var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;  
  // var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;  
            
  // width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;  
  // height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;  
            
  // var left = ((width / 2) - (w / 2)) + dualScreenLeft;  
  // var top = ((height / 2) - (h / 2)) + dualScreenTop;  
  // var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);  

  // // Puts focus on the newWindow  
  // if (window.focus) {  
  //     newWindow.focus();  
  // }  


  // var width = 500;
  //   var height = 210;
  //   var left = parseInt((screen.availWidth/2) - (width/2));
  //   var top = parseInt((screen.availHeight/2) - (height/2));
  //   var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
  //    jsWindow = window.open(
  //     'file:///C:/Users/WorkFromHome/Desktop/DialogsAB_JS/08.11.2021/Project/gameover.html',
  //      'gameover',
  //       windowFeatures);

  

  // let jsWindow = window.open(
  //   'file:///C:/Users/WorkFromHome/Desktop/DialogsAB_JS/08.11.2021/Project/gameover.html',
  //   'gameover',
  //   'height=210,width=500');
  //   jsWindow.moveTo(413, 395);
        


    // endgameEl.innerHTML = 
    // `<button onclick="location.reload()">Reload</button>`;

//  let features = 'height=600,width=800',
//url = 'file:///C:/Users/WorkFromHome/Desktop/DialogsAB_JS/Class_10/arrey2.html';
//let jsWindow = window.open(url, 'arrey2', features);

// let result = confirm('Are you sure you want to close this window?'); //Confirm 
// let message= result ? 'Game Over' : 'You may close this window';  // Conforim
// alert(message); // Confirm

// window.alert("Game Over");   // Alert

// let lang = prompt('What is your favorite programming language?');  // Promt

// let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` : // Promt
//     `It's ${lang}`;

// alert(feedback);


// let ageStr = prompt('How old are you?');
// let age = Number(ageStr);

// let feedback = age >= 16 ?
//     `You're eligible to join.` :
//     `You must be at least 16 year old to join.`;

// alert(feedback);


 endgameEl.innerHTML = 
 `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

addWordToDOM();

// Event listeners

// Typing
text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';

    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

// Settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});