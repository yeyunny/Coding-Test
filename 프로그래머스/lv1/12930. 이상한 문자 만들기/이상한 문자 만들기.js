function solution(s) {
    const change = (idx, string)=>{
        return idx % 2 === 0 ? string.toUpperCase() : string.toLowerCase()
    }
    
    const answer = s.split(' ').map(sentence => sentence.split('').map((string, idx) => change(idx, string)).join('')).join(' ')
    return answer
}

// function solution(s) {
//     const changeUpperLowerCase = (idx,string)=>{
//         return idx % 2 === 0 ? string.toUpperCase() : string.toLowerCase()
//     }

//     const answer = s.split(' ').map(sentence => sentence.split('').map((string,idx) => changeUpperLowerCase(idx,string)).join('')).join(' ')
//     return answer;
// }