module.exports = function reverse (n) {
  if(n>0){ s=String(n);}
    else {s=String((-1)*n);}
    s=s.split("").reverse().join("");
    return Number(s);
}
