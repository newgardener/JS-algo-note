function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution("ksekkset"));
console.log([...new Set("ksekkset")].join(""));

// 특정 문자 개수 구하기
function countChar(s, chr) {
  let answer = 0;
  let pos = s.indexOf(chr);
  while (pos !== -1) {
    answer++;
    pos = s.indexOf(chr, pos + 1);
  }
  return answer;
}

console.log(countChar("ksekkset", "k"));
