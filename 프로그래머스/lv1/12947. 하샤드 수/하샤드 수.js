function solution(x) {
    const str = String(x)
    const arr = Array.from(str);
    let number = 0;
    
    for(i=0; i<arr.length; i++){
        number += Number(arr[i]) 
    }
    return (x % number === 0) ? true : false   
}