function solution(a, b) {
    var answer = 0;
    

    
    if(a <= b){
        for(let i = a; i < b+1; i++){
            answer = answer+i

        }
    }else {
        for(let i = b; i < a+1; i++){

            answer = answer+i
        }
    }
    
    return answer;
}