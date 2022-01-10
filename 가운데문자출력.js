function solution(s) {
  let answer;
  let strLen = s.length;
  let mid = Math.floor(strLen / 2);
  if (strLen % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  return answer;
}

function solution2(s) {
  let answer;
  let strLen = s.length;
  let mid = Math.floor(strLen / 2);
  if (strLen % 2 === 1) answer = s.substr(mid, 1);
  else answer = s.substr(mid - 1, 2);
  return answer;
}

console.log(solution("study"));
console.log(solution("love"));

console.log(solution2("study"));
console.log(solution2("love"));
