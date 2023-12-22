//Title Rock Paper Sissors
//run a while loop and mantain 2 varaibles and contains wins from person and computers
//on click of user buttons respective image should apper in yourChoice box
// now create a function that makes computer choose rock paper and sissors

const rockButton = Document.getElementByClass("rock person");
const paperButton = Document.getElementByClass("paper person");
const sissorsButton = Document.getElementByClass("sissors person");
let computerCount == 0;
let personCount == 0;

function compChoice()
{
    let choice ;
    let randomNumber = math.random()*10;
    if (randomNumber <= 3.333)
    {
        choice = 'rock';
    }
    else if (randomNumber <= 6.6667)
    {
        choice = 'paper';
    }
    else
    {
        choice = 'sissors';
    }
    return choice;

} 

function perChoice( rock, paper, sissors)
{ let person :
    if (rock)
    {
        person = 'rock';
    }
    else if (paper)
    {
        person= 'paper';
    }
    else if (sissors)
    {
        person= 'sissors';
    }
    return person;
}

function gameTie()
{

//things to do when game ties
}

function personWins()
{personCount++;
//things to do when Person wins
}

function computerwins()
{computerCount++;
//things to do when computer wins
}
while(true){
while (true)
{
let rock = rockButton.onclick();
let paper = paperButton.onclick();
let sissors = sissorsButton.onclick();
if (rock || paper || sissors)
  {
    let personChoice = perChoice(rock, paper, sissors);
    let computerChoice = compChoice();
    if (personChoice == computerChoice)
    {
      gameTie();
    }
    else if (personChoice == 'rock')
    {
     if (computerChoice == 'sissors')
     {
        personWins();
     }
     else{
        computerwins();
     }
    }
    else if (personChoice == 'paper')
    {
        if (computerChoice == 'rock')
        {
           personWins();
        }
        else{
           computerwins();
        }
    }
    else if (personChoice == 'sissors')
    {
        if (computerChoice == 'paper')
        {
           personWins();
        }
        else{
           computerwins();
        }
    }

  }
}
  //Do not forget break statement
}
//if either varaible becomes 5 loop ends