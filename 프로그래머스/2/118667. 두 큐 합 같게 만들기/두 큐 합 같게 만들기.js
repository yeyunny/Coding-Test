// function solution(queue1, queue2) {
//     let count = 0
    
//     for(let i = 0; i <queue1.length+8; i++){
//         let res1 = 0
//         queue1.map(item => res1 = res1 + item)
//         let res2 = 0
//         queue2.map((item) => res2 = res2+item)
//             const total = (res1 + res2)/2

//         if(res1 < res2 ){
//             const popping = queue2.shift()
//             res2 = res2 - popping
//             queue1.push(popping)
//             res1 = res1 + popping
//             count++
//         } else if(res1 > res2 ){
//             const pop = queue1.shift()
//             res1 = res1 - pop
//             queue2.push(pop)
//             res2 = res2 + pop
//             count++
//         } else if(res2 = 0){
//             return -1
//         }
//     }
// return count
// }

function solution(queue1, queue2) {
    let tried = 0, queueLength = queue1.length + queue2.length
    let isFindSameQueue = false
    let idx1 = 0, idx2 = 0
    let queue1Sum = queue1.reduce((acc,val)=>acc+val,0)
    let queue2Sum = queue2.reduce((acc,val)=>acc+val,0)

    while(tried<queueLength * 2){
        if(queue1Sum > queue2Sum){
            const element = queue1[idx1++]
            queue1Sum -= element
            queue2Sum += element
            queue2.push(element)
        }
        else if(queue1Sum < queue2Sum){
            const element = queue2[idx2++]
            queue1Sum += element
            queue2Sum -= element
            queue1.push(element)
        }
        else{
            isFindSameQueue = true
            break
        }
        tried++
    }

    return isFindSameQueue ? tried : -1;
}