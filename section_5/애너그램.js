function solution(str1, str2) {
  str1 = [...str1];
  str2 = [...str2];
  for (let str of str1) {
    let idx = str2.findIndex(s => s === str);
    str2.pop(idx);
  }
  if (str2.length) return "NO";
  return "YES";
}

function solution2(str1, str2) {
  let answer = "YES";
  let map = new Map();

  for (let x of str1) {
    if (map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 1);
  }
  for (let x of str2) {
    if (!map.has(x) || map.get(x) === 0) return "NO";
    map.set(x, map.get(x) - 1);
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
console.log(solution2(a, b));
