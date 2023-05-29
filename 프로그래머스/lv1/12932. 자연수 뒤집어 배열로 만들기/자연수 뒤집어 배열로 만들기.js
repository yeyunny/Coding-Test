function solution(n) {
    const answer = [];

    const str = n.toString().split("").reverse()

    for(let i=0; i<str.length; i++){

       answer.push( Number(str[i]))
    }
console.log(answer)
    return answer;
}