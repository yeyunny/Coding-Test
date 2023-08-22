function solution(s) {
    const num = parseInt(s.length/2)
    //const num = s[parseInt(s.length/2)]
    if(s.length%2 !== 0){
        return s[num]
    } else if(s.length%2 === 0){
        return s[num-1]+s[num]
    }
}