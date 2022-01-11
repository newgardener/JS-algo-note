// 배열에서 반복되는 특정 원소의 모든 index를 구할 때

let a = ["A", "b", "a", "A", "e", "C", "e"];
let answer = a.map((chr, idx) => (chr === "e" ? idx : "")).filter(String);
console.log(answer);
