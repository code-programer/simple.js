Math.median = function(...e){
  var arr = e;
  return eval(arr.toString().replaceAll(",", " + ")) / arr.length;
}
Math.mcm = function(...e){
  var res = [];
  for(i in e){
    var t = e[i];
    res[i] = [];
    var n = 2;
    while(n<=100){
      if(eval(t % n) == 0){
        res[i].push(n)
      }
      n = n + 1;
    }
  }
  for(pos in res[0]){
    var p = res[0][pos];
    var fi = 0;
    for(list in res){
      if(res[list].includes(p)){
        var fi = fi + 1;
      }
    }
    if(fi == res.length){
      return p;
    }
  }
}
