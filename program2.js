const decodeTheRing = function (s, p) {

    // write your code here

    let i = 0;
    let j = 1;

    while(i<s.length || j<p.length){
      if(s[i] == p[j]){
        i++;
        j++;
      }

      if(p[j] == '?'){
        i++;
        j++;
      }

      if(p[j] == "*"){
        let k = p[j+1];
        while(k != s[i] && i<s.length){
          i++;
        }
        
      }

      console.log(s[i],p[j]);
    }

    if(s[i] == p[j]){
      return true;
    }
    else return false;

  };
  
  module.exports = decodeTheRing;


  decodeTheRing('hello', 'h*llo')