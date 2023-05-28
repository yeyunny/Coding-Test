function solution(num) {
    const sp = num.split('').reverse()
    const arr = []
    for(i=0; i<sp.length; i++){
        if(i < 4){
            arr.unshift(sp[i])
        } else if (i>3) {
            arr.unshift("*")
        }
    }
    return arr.join('')
}