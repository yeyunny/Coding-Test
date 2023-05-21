function solution(absolutes, signs) {
    
 let test = 0;
    
    for (let i=0; i < signs.length; i++){
        if(signs[i] === true){
          test = test + absolutes[i]
        } else {
          test = test - absolutes[i]
        }
    } 
 return test
}