let randomNum = parseInt(Math.random()*100 + 1 )

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame= true;

if(playGame) {
    submit.addEventListener('click',function(e) {
        e.preventDefault();
        const guess= parseInt(userInput.value);
        validateGuess(guess);
    }
)}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert(`Please ! Enter a Valid Number.`)
    }

    else if(guess<1){
        alert(`Please ! Enter greater Number than 1`)
    }

    else if (guess>100){
        alert(`Please ! Enter lesser Number than 100`)
    }

    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Random Number was ${randomNum} . Game Over !!!`)
            endgame()
        }
        else{
            displayGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess === randomNum){
        displayMessage(`Got it ! Right`)
        endgame()
    }
    else if(guess < randomNum){
        displayMessage(`Nah ! too small`)
    }
    else if(guess > randomNum){
        displayMessage(`Nah ! too large`)
    }
}


function displayGuess(guess)
{
    userInput.value='';
    guessSlot.innerHTML +=`${guess}  `;
    numGuess++;
    remaining.innerHTML = `${ 11 - numGuess}`;
}

function displayMessage(m){
    lowOrHi.innerHTML= `<h2>${m}</h2>`
}

function endgame()
{
    userInput.value=' '
    userInput.setAttribute("disabled","")
    p.classList.add('button')
    p.innerHTML=`<h2 class="newGame" style="cursor: pointer;">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame();
}

function newGame(){
    const newStart = document.querySelector('.newGame');
    newStart.addEventListener('click',function(e){
        randomNum=parseInt(Math.random() * 100 + 1)
        prevGuess=[]
        numGuess=1;
        guessSlot.innerHTML=''
        remaining.innerHTML= `${ 11 - numGuess }`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        playGame=true;
    });

}
