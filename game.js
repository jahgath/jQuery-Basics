var player1 = prompt("Player One: Enter Name, you will be blue");
var player1Color = 'rgb(86,151,255)';

var player2 = prompt("Player Two: Enter Name, you will be red");
var player2Color = 'rgb(237,45,73)';

var game_on = true;
var table = $('table tr');

function changeColor(rowIndex,colIndex){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

function returnColor(rowIndex,colIndex){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex){
  var colorReport = returnColor(5,colIndex);
  for (var row = 5; row > -1; row--) {
    colorReport = returnColor(row,colIndex)
    if (colorReport === 'rgb(128,128,128)') {
      return row
    }
  }
}

function colorMatchCheck(one,two,three,four){
  return(one === two && one === three && one === four && one !== 'rgb(128,128,128)' && one !== undefined)
}

function horizontalWinCheck(){
  for(var row = 0; row < 6; row++){
    for(var col = 0; col < 4; col++)
    if(colorMatchCheck(returnColor(row,col), returnColor(row,col+1), returnColor(row,col+2), returnColor(row,col+3))){
      console.log('horiz');
      return true;
    }else {
      continue;
    }
  }
}

function verticalWinCheck(){
  for(var col = 0; col < 7; col++){
    for(var row = 0; row < 4; row++)
    if(colorMatchCheck(returnColor(row,col), returnColor(col,row+1), returnColor(col,row+2), returnColor(col,row+3))){
      console.log('horiz');
      return true;
    }else {
      continue;
    }
  }
}
