function solution(arr) {
  let answer = 1,
    max = arr[0];
  arr.forEach(height => {
    if (height > max) {
      answer += 1;
      max = height;
    }
  });
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
