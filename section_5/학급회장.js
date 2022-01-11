function solution(s) {
  let answer;
  let map = new Map();
  for (let chr of s) {
    if (!map.has(chr)) map.set(chr, 1);
    else map.set(chr, map.get(chr) + 1);
  }
  answer = [...map].sort((a, b) => b[1] - a[1]);
  return answer[0][0];
}

function solution2(s) {
  let answer;
  let map = new Map();
  for (let chr of s) {
    if (!map.has(chr)) map.set(chr, 1);
    else map.set(chr, map.get(chr) + 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of map) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
console.log(solution2(str));
