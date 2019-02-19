function numOdd () {
  var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  var summ = 0;
  for (var i = 0; i < array.length; i++) {
    var control = i % 2;
    if (control != 0) {
      summ += array[i];
    }
  }
  return summ;
}


document.getElementById("log").innerHTML= numOdd();
