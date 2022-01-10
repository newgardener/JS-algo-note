function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

function solution2(arr) {
  let sortedArr = arr.slice().sort((a, b) => b - a);
  let answer = arr.map(num => sortedArr.indexOf(num) + 1);
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution2(arr));
console.log(solution(arr));

let arr2 = [92, 92, 92, 100, 76];
console.log(solution2(arr2));
console.log(solution(arr2));
