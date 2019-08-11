var playerOne = prompt("Player One [Blue] Enter your name: ");
var playerOneColor= 'rgb(10, 58, 204)';

var playerTwo = prompt("Player Two [Red] Enter your name: ");
var playerTwoColor= 'rgb(204, 13, 10)';

var game_on= true;
var table= $('table tr');

function reportWin(rowNum, colNum){
  console.log("You win starting at row "+rowNum+ " and column "+colNum);
}

function changeColor(rowIndex, colIndex, color)
{
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

function returnColor(rowIndex, colIndex)
{
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex){
  var colorReport= returnColor(5,colIndex);
  for(var row=5; row>-1; row--){
    colorReport= returnColor(row,colIndex);
    if(colorReport === 'rgb(148, 155, 178)'){
      return row;
    }
  }
}


function colorMatchCheck(one, two, three, four){
  return (one === two && one === three && one === four && one !=='rgb(148, 155, 178)' &&one !==undefined);
}

//Horizontal Win
function horizontalWin(){
  for(var row= 0; row<6; row++){
    for(var col=0; col<4; col++){
      if(colorMatchCheck(returnColor(row,col), returnColor(row,col+1), returnColor(row,col+2), returnColor(row,col+3))){
        console.log('horizontal');
        reportWin(row,col);
        return true;
      }else{
        continue;
      }
    }
  }
}


//Vertical Win
function verticalWin(){
  for(var col= 0; col<7; col++){
    for(var row=0; row<3; row++){
      if(colorMatchCheck(returnColor(row,col), returnColor(row+1,col), returnColor(row+2,col), returnColor(row+3,col))){
        console.log('vertical');
        reportWin(row,col);
        return true;
      }else{
        continue;
      }
    }
  }
}


//Diagonal Win
function diagonalWin(){
  for(var col= 0; col<5; col++){
    for(var row=0; row<7; row++){
      if(colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1), returnColor(row+2,col+2), returnColor(row+3,col+3))){
        colsole.log('diagonal');
        reportWin(row,col);
        return true;
      }
      else if(colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1), returnColor(row-2,col+2), returnColor(row-3,col+3))){
        console.log('diagonal');
        reportWin(row,col);
        return true;
      }
      else{
        continue;
      }
    }
  }
}

var currentPlayer= 1;

var currentName= playerOne;

var currentColor= playerOneColor;



$('h3').text(playerOne+ " It is your turn!").css("color", currentColor);


$('.board button').on('click', function(){

  var col = $(this).closest('td').index();

  var bottomAvail = checkBottom(col);

  changeColor(bottomAvail, col, currentColor);

  if(horizontalWin() || verticalWin() || diagonalWin()){
    alert(currentName+ " You Have Won!");
    $('h3').fadeOut('fast');
    $('h2').fadeOut('fast');
    $('h1').delay("slow").text('Refresh to Start');
  }

  currentPlayer= currentPlayer * -1;

  if(currentPlayer === 1){
    currentName= playerOne;
    currentColor= playerOneColor
    $('h3').text(currentName+" It is your turn!").css("color", currentColor);
  }else{
    currentName= playerTwo;
    currentColor= playerTwoColor;
    $('h3').text(currentName+" It is your turn!").css("color", currentColor);

  }
})
