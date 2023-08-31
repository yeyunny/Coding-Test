function solution(array, commands) {
    const answer = [];
    
    for(let i=0; i<commands.length; i++){
        const arr = commands[i]

        const start = commands[i][0]-1
        const end = commands[i][1]
        const pick = commands[i][2]-1

        
        const sliceArr = array.slice(start, end)
        const sortArr = sliceArr.sort((a, b) => a - b)

        answer.push(sortArr[pick])
    }

    return answer
}