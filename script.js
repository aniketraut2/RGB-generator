function myColor(){
    var red = document.getElementById('red').value ;
    var green = document.getElementById('green').value ;
    var blue = document.getElementById('blue').value ;
    var color = 'RGB('+ red +', '+ green +', '+ blue +')';
    document.body.style.backgroundColor=color;
    document.getElementById('box').value = color;

    // Add box shadow
  var boxShadowColor = 'RGBA(' + red + ', ' + green + ', ' + blue + ', 0.5)';
  var boxShadow = '0 0 10px 5px ' + boxShadowColor;
  document.getElementById('box').style.boxShadow = boxShadow;
}
document.getElementById('red').addEventListener('input', myColor);
document.getElementById('green').addEventListener('input', myColor);
document.getElementById('blue').addEventListener('input', myColor);




