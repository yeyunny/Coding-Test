function solution(sizes) {
    var answer = 0;
    
    for (let arr of sizes){
        arr.sort((a,b)=> b-a)
    }

    let front = []
    let back = []
    
    sizes.forEach(i =>{
        front.push(i[0])
        back.push(i[1])
    })
    
    front.sort((a,b)=>b-a)
    back.sort((a,b)=>b-a)
    
    answer = front[0] * back[0]
    
    return answer;
}

// function solution(sizes) {
//     let answer = 0;
//     for (let arr of sizes) {
//         arr.sort((a, b) => b - a);;
//     }

//     let front = [], back = [];
//     sizes.forEach(i => {
//         front.push(i[0]);
//         back.push(i[1]);
//     });

//     front.sort((a,b) => b - a);
//     back.sort((a,b) => b - a);

//     answer = front[0] * back[0];

//     return answer;
// }
