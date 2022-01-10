function solution(s) {
  let answer;
  answer = s.filter((v, i) => {
    if (s.indexOf(v) === i) return v;
  });

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
console.log([...new Set(str)])
