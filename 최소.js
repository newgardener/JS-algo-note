function solution(arr) {
//   let answer = Math.min(...arr);
  let answer = Math.min.apply(null, arr);
  return answer;
}

let arr = [5, 7, 3, 2, 1, 7, 9, 11];
console.log(solution(arr));
