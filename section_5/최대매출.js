// 시간 복잡도에 있어서 최적화 적용 x => sum을 구하는 부분을 sliding window로 최적화할 수 있을 것
function solution(arr, k) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sliced = arr.slice(i, i + k);
    sum = sliced.reduce((acc, curr) => acc + curr, 0);
    answer = Math.max(answer, sum);
  }
  return answer;
}

function optimized(arr, k) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(a, 3));
console.log(optimized(a, 3));
