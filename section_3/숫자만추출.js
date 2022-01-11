function solution(str) {
  let answer = "";
  answer = str
    .split("")
    .filter(chr => parseInt(chr) >= 0)
    .join("");
  return parseInt(answer);
}

function solution2(str) {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
console.log(solution2(str));
