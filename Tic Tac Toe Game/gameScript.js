var playerOne=prompt("Enter player one name: ");
var playerTwo=prompt("Enter player two name: ");



//Restart Game
var restart= document.querySelector("#b");

//Grab all square
var square= document.querySelectorAll('td');

//Clear all Square
function clearSquare(){
  for(var i=0; i<square.length; i++){
    square[i].textContent='';
  }
}

//Check Content
function getTableData(table) {
    var data = [];
    table.find('tr').each(function (rowIndex, r) {
        var cols = [];
        $(this).find('th,td').each(function (colIndex, c) {
            cols.push(c.textContent);
        });
        data.push(cols);
    });
    return data;
}


//Check Square
function changeMarker(){
  if(this.textContent ==='' && currentPlayer===playerOne){
    this.textContent= 'X';
  }
  else if(this.textContent ==='' && currentPlayer===playerTwo){
    this.textContent= 'O';
  }
  else{
    alert("Invalid Input");
  }
}


for(var i=0; i<square.length; i++){
  square[i].addEventListener('click', changeMarker);
}

//Event Listener for all square
restart.addEventListener('click',clearSquare);


//Check content match

function ccMatchCheck(one, two, three){
  return( one===two && one===three &&one!=='')
}


// function horizontalWin(){
//   for(var row=0; row<3,row++){
//     for(var col=0; col<3;col++){
//       if()
//     }
//   }
// }
