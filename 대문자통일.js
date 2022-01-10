function solution(s) {
  let answer = [...s].map(chr => {
    if (chr !== chr.toUpperCase()) return chr.toUpperCase();
    return chr;
  });

  return answer.join("");
}

function solution2(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }
  return answer;
}

function solution3(s) {
  return s.toUpperCase();
}

let str = "ItisTimeToStudy";
console.log(solution(str));
console.log(solution2(str));
console.log(solution3(str));
