function solution(s) {
  let answer = [...s].filter(chr => chr === chr.toUpperCase()).length;
  return answer;
}

// 대문자 65(A) ~ 90(Z)
// 소문자 97(a) ~ 122(z)
function solution2(s) {
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
console.log(solution2(str));
