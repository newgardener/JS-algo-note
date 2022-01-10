function solution(s) {
  let length = s.length;
  s = s.toLowerCase();
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (s[i] !== s[length - i - 1]) return "NO";
  }
  return "YES";
}

function solution2(s) {
  s = s.toLowerCase();
  return s.split("").reverse().join("") === s ? "YES" : "NO";
}

let str = "gooG";
let str2 = "loove";
console.log(solution(str));
console.log(solution(str2));

console.log(solution2(str));
console.log(solution2(str2));
