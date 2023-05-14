function solution(food) {
    let test = [0];
    
    for (i=food.length; i>= 1; i--){
      const Int =parseInt(food[i] / 2)     
      const str = i.toString().repeat(Int)
      const merong = test.push(str) && test.unshift(str)
    }
   return test.join("")
}

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
// 16
// function solution(food) {
//     var answer = '';
//     let arr = [];

//     food.map((f,i) => {
//         f = f % 2 == 0 ? f : f -1;
//         for(let j=0;j<f/2;j++){
//             arr.push(i);
//         }
//     });

//     answer = arr.join('') + 0 + arr.reverse().join('');

//     return answer;
// }
