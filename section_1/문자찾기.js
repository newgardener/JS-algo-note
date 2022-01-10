function solution(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
}

function solution2(s, t) {
  let answer = [...s].filter(chr => chr === t).length;
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
console.log(solution2(str, "R"));
