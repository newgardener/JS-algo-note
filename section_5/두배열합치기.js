function solution(arr1, arr2) {
  let answer = [];
  let left = 0,
    right = 0;
  while (left < arr1.length || right < arr2.length) {
    if (arr1[left] <= arr2[right] || right === arr2.length) {
      answer.push(arr1[left]);
      left += 1;
    } else if (arr2[right] <= arr1[left] || left === arr1.length) {
      answer.push(arr2[right]);
      right += 1;
    }
  }
  return answer;
}

function solution2(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
console.log(solution2(a, b));
