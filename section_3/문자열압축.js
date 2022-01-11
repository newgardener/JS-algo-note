function solution(s) {
  let answer = "";
  count = 1;
  s.split("").forEach((chr, idx) => {
    if (idx === 0) {
      answer += chr;
    } else {
      if (chr === s[idx - 1]) {
        count += 1;
      } else {
        if (count > 1) answer += count;
        answer += chr;
        count = 1;
      }
    }
  });
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
