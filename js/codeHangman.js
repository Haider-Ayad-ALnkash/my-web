


const letters="abcdefghijklmnopqrstuvwxyz";
let letterArray=Array.from(letters);
let lettersSpan=document.querySelector(".letters");
letterArray.forEach(letter=>{
    let span=document.createElement("span");
        theletter=document.createTextNode(letter);
        span.appendChild(theletter);
        span.className="box-letter";
        lettersSpan.appendChild(span);
    }
);

// Object Of Words + categores

const words={
    programming:["phython"],
    person:["jackie chan","brosli","mister bin"],
    country:["iraq","egypt"],
    movies:["up"]
}
let allKeys=Object.keys(words);
let randomPropNumber=Math.floor(Math.random()*allKeys.length);
let randomPropName=allKeys[randomPropNumber];
let randomPropValue=words[randomPropName];



let randomValueNumber=Math.floor(Math.random()* randomPropValue.length);
let randomVuleVule=randomPropValue[randomValueNumber];
document.querySelector(".category span").innerHTML=randomPropName;

// Select image for prievw
let x=document.querySelector(".hangman-draw"); 
x.style.backgroundImage='url("image/'+randomVuleVule+'.jpg")';

// select letter-guess 

let leterGuess=document.querySelector(".letter-guess");
let ArrayLetterGuess=Array.from(randomVuleVule);
ArrayLetterGuess.forEach(letter=>{
    let letterSpan=document.createElement("span");
    if (letter === " ") {
        letterSpan.className="withSpace";
    }
    leterGuess.appendChild(letterSpan);
});

//Tries
let wrongtries=0;
let theDraw=document.querySelector(".hangman-draw");

let guessSpans=document.querySelectorAll(".letter-guess span");

// handle Clicked on letters
document.addEventListener("click",(e)=>{
    document.getElementById("faild").play();
        theStatus=false;
        if (e.target.className === 'box-letter') {
        e.target.classList.add("clicked")
        letterClick=e.target.innerHTML.toLowerCase();
        theChoosenWord=Array.from(randomVuleVule.toLowerCase());
        theChoosenWord.forEach((wordletter,index)=>{
            if (letterClick === wordletter) {
                theStatus=true;
                guessSpans.forEach((wordspan,indexspan)=>{
                    if (indexspan === index) {
                        wordspan.innerHTML=wordletter;
                    }
                })
            }
        });
//if the letter is wrong
        if (theStatus !== true) {
            wrongtries++;
            theDraw.classList.add(`wrong-${wrongtries}`);
            if (wrongtries === 9) {
                endGame();
            }
        }

    }
});


function endGame() {
    lettersSpan.classList.add("finished");
    let div=document.createElement("div");
    div.className='popup';
    div.appendChild(document.createTextNode(`Game Over ,the word is " ${randomVuleVule} "`));
    document.body.appendChild(div);
    document.getElementById("song").play();
    setTimeout(() => {
        window.location.reload()
    }, 4000);
}
function succesGame() {
    lettersSpan.classList.add("finished");
    let div=document.createElement("div");
    div.className='popup';
    div.appendChild(document.createTextNode(` Success Game ,the word is " ${randomVuleVule} " And the wrong letters ${wrongtries}`));
    document.body.appendChild(div);
    setTimeout(() => {
        window.location.reload()
    }, 4000);
}




