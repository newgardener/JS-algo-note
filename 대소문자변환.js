function solution(s) {
  let answer = [...s].map(chr => {
    let code = chr.charCodeAt();
    if (code >= 65 && code <= 90) {
      return chr.toLowerCase();
    } else if (code >= 97 && code <= 122) {
      return chr.toUpperCase();
    }
  });

  return answer.join("");
}

function solution2(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}

console.log(solution("sTUdy"));
console.log(solution2("sTUdy"));
