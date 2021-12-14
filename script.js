function changeColor(newColor) {
    var elem = document.getElementById("para1");
    elem.style.color = newColor;
  }

function button4(){
  
  var elem = document.getElementById("para1");
  var widthPercentage = 9;
  elem.style.fontSize = 'calc(0.5rem + ' + widthPercentage + '%)';
  elem.style.fontSize = 'max(2rem, ' + widthPercentage + '%)';
}

function changeInnerHtml() {

  var elem = document.getElementById("para1");
  var widthPercentage = 9;
  elem.style.fontSize = 'calc(0.5rem + ' + widthPercentage + '%)';
}

function promptNewInnerHtml() {
 var elem = document.getElementById("para1");
  var widthPercentage = 9;
  elem.style.fontSize = '20px';
}
