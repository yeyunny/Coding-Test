
function solution(participant, completion) {
    const participantObj = {}

    // 참가자 명단 작성 : 동명이인 처리
    participant.forEach(human=>{
        if(participantObj[human] === undefined){
            participantObj[human] = 1
        }
        else{
            participantObj[human]++
        }
    })

    // 완주자 명단 작성 : 
    completion.forEach(human=>{

        participantObj[human]--
        if(participantObj[human] === 0)
            delete participantObj[human]
    })

    const answer = Object.keys(participantObj)[0]
    return answer;
}