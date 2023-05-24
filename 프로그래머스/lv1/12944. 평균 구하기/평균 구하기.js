function solution(arr) {
    let test = 0;
    
    for(let i =0; i<arr.length; i++){
        test += (arr[i] / arr.length)
    }
    return test
}
