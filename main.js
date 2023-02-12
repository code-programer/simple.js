Math.median = function(...e){
  var arr = e;
  return eval(arr.toString().replaceAll(",", " + ")) / arr.length;
}
