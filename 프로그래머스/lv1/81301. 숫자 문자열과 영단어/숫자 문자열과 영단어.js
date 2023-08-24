function solution(s) {
    const numObj = {
        'zero' : 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9,
    };

    let currentWord = '';
    let result = '';
    
    for ( let i = 0; i < s.length; i++){
        const char = s[i];
        
        if (char >= '0' && char <= '9'){
            result += char;
        } else {
            currentWord += char;
            if(numObj[currentWord] !== undefined){
                result += numObj[currentWord]
                currentWord = '';
            }
        }
    }
    
    return parseInt(result, 10);
}
