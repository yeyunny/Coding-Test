function solution(t, p) {
    const pLen= p.length
    const T = t.split("")
    const arr = []
    let count = 0

    
    for(let i = 0; i<T.length; i++){
        const sl = T.slice(i, pLen+i)        
        sl.length === pLen ? arr.push(Number(sl.join(""))) : null
    }
    
    for(let i = 0; i<arr.length; i++){
        arr[i] <= p ? count++ : undefined
    }
    
return count
    
}