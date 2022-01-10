function solution(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
}

function solution2(arr) {
  let answer = 0;
  arr.forEach((num, idx) => {
    if (num === 1) {
      if (idx === 0) answer += 1;
      else {
        if (arr[idx - 1] === 0) answer += 1;
        else {
          arr[idx] += arr[idx - 1];
          answer += arr[idx];
        }
      }
    }
  });
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
console.log(solution2(arr));
