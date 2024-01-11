// function solution(numbers) {
//     var answer = '';
    
//     const oneArr = []
//     const otherArr = []    
    
//     for(let i=0; i<numbers.length; i++){
//         // var result1 = str.substr(0, 2);
//                 console.log(typeof numbers[1].toString())
//         console.log(numbers[i].toString().substr(0,1))
       
//     }
    
//     return answer;
// }

function solution(numbers) {
  const sortedStrings = numbers.map(String).sort((a, b) => (b + a).localeCompare(a + b));
  const result = sortedStrings.join('');

  // 결과가 "0"으로 시작하는 경우 0이 여러 개 있는 것이므로 "0"을 반환합니다.
  if (result.startsWith("0")) {
    return "0";
  }

  return result;
}

