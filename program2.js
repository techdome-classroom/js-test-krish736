const decodeTheRing = function (s, p) {

    // write your code here

    let i = 0;
    let j = 1;

    while(i<s.length || j<p.length){
      if(s[i] == p[j]){
        i++;
        j++;
      }
    }

  };
  
  module.exports = decodeTheRing;