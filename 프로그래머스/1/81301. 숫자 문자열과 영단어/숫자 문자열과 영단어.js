function solution(s) {
    
const myObj = {
    "zero":0,
    "one":1,
    "two":2,
    "three":3,
    "four":4,
    "five":5,
    "six":6,
    "seven":7,
    "eight":8,
    "nine":9
  }

const spell = s.split("")    
    
let current = ""
let answer = ""
    for(let i = 0; i < spell.length; i++){
        const word = spell[i]
        if(word >= 0 && word <= 9){
            answer += word
        } else if (word !== undefined){
            current += word
             Object.keys(myObj).map((item) => {
                if(item === current){
                    answer += myObj[current]
                    current = ""
                }
            })
        }
    }
    return Number(answer)
}
