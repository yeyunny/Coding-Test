function solution(arr) {
    const small = Math.min(...arr)
    const answer = []

    for(let i=0; i<arr.length; i++){
        if(arr[i] > small){
            answer.push(arr[i])
        } 
    }
   return answer.length === 0 ? [-1] : answer
}