function solution(s){
    let ppp = 0;
    let yyy = 0
    const sss = s.toUpperCase().split("");
    
    for(i=0; i<sss.length; i++){
      if(sss[i] === "P"){
          ppp += 1;
      } else if (sss[i] === "Y"){
          yyy += 1;
      }
    }

    if(ppp === yyy){
        return true
    }return false


}