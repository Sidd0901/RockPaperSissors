//Title Rock Paper Sissors
//run a while loop and mantain 2 varaibles and contains wins from person and computers
//on click of user buttons respective image should apper in yourChoice box
// now create a function that makes computer choose rock paper and sissors

const rockButton = document.getElementById("buttonR");
const paperButton = document.getElementById("buttonP");
const sissorsButton = document.getElementById("buttonS");
const personChoiceDisplay = document.getElementById("DisplayP");
//const computerChoiceDisplay = document.getElementsByClassName("yourChoice computer");
let computerCount = 0;
let personCount = 0;
let prevImg = false;
let prevCompImg = false;
let prevResult = false;
 let personImg;
 let compImg;
 let result;
 let computerScore = 0 ;

 let personScore = 0 ;
 document.getElementById("countP").innerText = personScore ;
    document.getElementById("countC").innerText = computerScore ;
 function compChoice()
{
    let choice ;
    let randomNumber = Math.random()*10;
    if (randomNumber <= 3.333)
    {
        choice = 'rock';
        if (prevCompImg == true)
    {
        compImg.remove();
    }
   compImg = document.createElement('img');
    compImg.setAttribute("src", "images/rock.jpeg");
    compImg.setAttribute("style", " border-radius: 15%;");
    compImg.setAttribute("height", "146vh");
    compImg.setAttribute("width", "146vw");
   document.getElementById("displayC").appendChild(compImg);
   prevCompImg = true;
    }
    else if (randomNumber <= 6.6667)
    {
        choice = 'paper';
        if (prevCompImg == true)
    {
        compImg.remove();
    }
   compImg = document.createElement('img');
    compImg.setAttribute("src", "images/paper.png");
    compImg.setAttribute("style", " border-radius: 15%;");
    compImg.setAttribute("height", "146vh");
    compImg.setAttribute("width", "146vw");
   document.getElementById("displayC").appendChild(compImg);
   prevCompImg = true;
    }
    else
    {
        choice = 'sissors';
        if (prevCompImg == true)
    {
        compImg.remove();
    }
   compImg = document.createElement('img');
    compImg.setAttribute("src", "images/sissors.png");
    compImg.setAttribute("height", "146vh");
    compImg.setAttribute("width", "146vw");
    compImg.setAttribute("style", " border-radius: 15%;");
   document.getElementById("displayC").appendChild(compImg);
   prevCompImg = true;
    }
    return choice;
} 

function gameTie()
{  if (prevResult == true)
    {
        result.remove();
    }
  result = document.createElement('h1');
  result.innerText = 'Game Ties!';
  document.getElementById("resultWindow").appendChild(result);
  prevResult = true ;
}

function personWins()
{  if (prevResult == true)
    {
        result.remove();
    }
  result = document.createElement('h1');
  result.innerText='You Win!';
  document.getElementById("resultWindow").appendChild(result);
  prevResult = true ;
  personScore++ ;
}

function computerWins()
{  if (prevResult == true)
    {
        result.remove();
    }
  result = document.createElement('h1');
  result.innerText ='Computer Wins!';
  document.getElementById("resultWindow").appendChild(result);
  prevResult = true ;
  computerScore++ ;
}
function game(value)
{
    let compWindow = compChoice();
    if (value == compWindow)
    {
        gameTie();
    } 
    else if (value == 'rock')
    {
        if (compWindow == 'paper')
        {computerWins();}
        else
        {personWins();}
    }
    else if(value == 'paper')
    {
        if (compWindow == 'sissors')
        {computerWins();}
        else
        {personWins();}
    }
    else
    {
        if (compWindow == 'rock')
        {computerWins();}
        else
        {personWins();}
    }
    
    if ((personScore >= 5)||(computerScore >= 5))
    {
        gameEnd();
    }
    document.getElementById("countP").innerText = personScore ;
    document.getElementById("countC").innerText = computerScore ;
}
let r = function()
{   const choice = 'rock';
    if (prevImg == true)
    {
        personImg.remove();
    }
   personImg = document.createElement('img');
    personImg.setAttribute("src", "images/rock.jpeg");
    personImg.setAttribute("height", "146vh");
    personImg.setAttribute("width", "146vw");
    personImg.setAttribute("style", " border-radius:  15%;");
   document.getElementById("displayP").appendChild(personImg);
   prevImg = true;
   compChoice();
   game(choice);
}
let p = function()
{   const choice = 'paper';
    if (prevImg == true)
    {
        personImg.remove();
    }
   personImg = document.createElement('img');
    personImg.setAttribute("src", "images/paper.png");
    personImg.setAttribute("height", "146vh");
    personImg.setAttribute("width", "146vw");
    personImg.setAttribute("style", " border-radius: 15%;");
   document.getElementById("displayP").appendChild(personImg);
   prevImg = true;
   compChoice();
   game(choice);
}
let s = function()
{   const choice = 'sissors';
    if (prevImg == true)
    {
        personImg.remove();
    }
   personImg = document.createElement('img');
    personImg.setAttribute("src", "images/sissors.png");
    personImg.setAttribute("height", "146vh");
    personImg.setAttribute("width", "146vw");
    personImg.setAttribute("style", " border-radius: 2svw;");
   document.getElementById("displayP").appendChild(personImg);
   prevImg = true;
   compChoice();
   game(choice);

}
let popup = document.createElement('div');

let popupText = document.createElement('h1');
let backbutton = document.createElement('button');

function gameEnd ()
{
    popup.setAttribute("id" , "popup");
    if (personScore >= 5)
    {
    popup.setAttribute("style" , " margin:0px; padding:0px; height: 100svh; width: 100svw; background-image: linear-gradient(green 10%, rgb(32, 19, 19)); position: absolute; top:0%; left:0%;    display: flex; flex-direction: column; align-items: center; justify-content: space-evenly; opacity:0.7;");  
    popupText.innerText= 'You Win The Game ! ';
    }
    else 
    {
        popup.setAttribute("style" , " height: 100%; width: 100%; background-image: linear-gradient(red 10%, rgb(32, 19, 19)); position: absolute; top: 0svh; left:0svw; display: flex; flex-direction: column; align-items: center; justify-content: space-evenly; opacity:0.7;");  
        popupText.setAttribute("style","opacity:1;");
        popupText.innerText= 'You Loose The Game ! ';
    }
    backbutton.setAttribute("style" , "height: 10svh; width: 14svw; font-size: medium; font-weight: 900; border-radius: 10%; background-color: green; color: white; opacity:1;")
    backbutton.innerText = 'Play Again'
    document.body.appendChild(popup);
    document.getElementById("popup").appendChild(popupText);
    document.getElementById("popup").appendChild(backbutton);
}

let goBack = function()
{
personScore = 0;
computerScore = 0;
backbutton.remove();
popupText.remove();
popup.remove();
document.getElementById("countP").innerText = personScore ;
document.getElementById("countC").innerText = computerScore ;
}
rockButton.addEventListener ('click' , r);
paperButton.addEventListener ('click' , p);
sissorsButton.addEventListener ('click' , s);
backbutton.addEventListener('click', goBack);