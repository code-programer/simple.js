Math.median = function(...e){
  var arr = e;
  return eval(arr.toString().replaceAll(",", " + ")) / arr.length;
}
Math.mcd = function(a, b){
    if(a != undefined && b != undefined){
  let temporal; //Para no perder b
    while (b !== 0) {
        temporal = b;
        b = a % b;
        a = temporal;
    }
    return a;
    }
}
Math.mcm = function(a, b){
  if(a != undefined && b != undefined){
    return eval(a * b) / Math.mcd(a, b)
  }
}
