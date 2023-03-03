let letters = "abcdefghijklmnopqrstuvwxyz" ;

letters = Array.from(letters) ;

letters.forEach(element => {
    let letterBox = document.createElement(`span`);
    letterBox.className = "letterBox";
    letterBox.textContent = element ;

    document.querySelector(`.chars`).appendChild(letterBox) ;
});


const words = {
    programming: ["php", "javascript", "go", "scala", "fort an", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memnto", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexa nder", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
let keysArr = Object.keys(words) ;
let randProp = parseInt(Math.random()*keysArr.length)  ;
let propName = keysArr[randProp] ;

let randWord = parseInt(Math.random()*words[propName].length) ;
let word = words[propName][randWord] ;

document.querySelector(`header span`).textContent = propName ;

word = Array.from(word) ;

word.forEach(ele => {
    let guessedWord = document.createElement(`span`) ;
    guessedWord.className = `guessedWord` ;
    if(ele == ' ')guessedWord.classList.add("space");
    

    document.querySelector(`footer`).appendChild(guessedWord) ;

})
let gameOver = document.querySelector(`.over`) ;
document.addEventListener("click", c=>{
    if(c.target.className == "letterBox"){
        let clickedLetter ;
        c.target.classList.add("clicked") ;
        clickedLetter = c.target.textContent ;
        let found = false , done = true ;

        let emptyPositions = document.querySelectorAll(".guessedWord") ;
        for(let i = 0 ; i< emptyPositions.length ;i++){
            if(word[i].toLowerCase() == clickedLetter.toLowerCase()){
                found = true ;
                if(i == 0 || word[i-1] == ' ')clickedLetter = clickedLetter.toUpperCase();
                emptyPositions[i].textContent = clickedLetter ;
                clickedLetter = clickedLetter.toLowerCase() ;
            }
            if(word[i] != ' ' && emptyPositions[i].textContent == ''){
                done = false ;
            }
        }
        if(done){
            document.querySelector(`.lives`).textContent = "" ;

            
            gameOver.textContent = "You Win!";

            gameOver.style.display = "flex" ;
            document.querySelector('.bloor').style.display = "block" ;
        }

        if(!found){
            let livesLeft = document.querySelectorAll(`.lives .fa-heart`) ;
            
            if(livesLeft.length > 0){
                
                livesLeft[livesLeft.length-1].remove();

                if(livesLeft.length == 1){
                    document.querySelector(`.lives`).textContent = "Your Last Chance" ;
                }
            }else {
                document.querySelector(`.lives`).textContent = "" ;
                
                console.log(gameOver) ;
                gameOver.appendChild(document.createElement(`br`)) ;
                gameOver.innerHTML+= `The word was ${word.join('')}` ;
                gameOver.style.display = "flex" ;

                document.querySelector('.bloor').style.display = "block" ;
            }
        }

    }
})
document.addEventListener("click" , c=>{
    if(c.target.className == 'bloor'){
        location.reload() ;
    }
})



console.log(word) ;