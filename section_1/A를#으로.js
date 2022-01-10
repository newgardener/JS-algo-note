function solution(s) {
  let answer;
  answer = [...s].map(chr => {
    if (chr === "A") return "#";
    return chr;
  });

  return answer.join("");
}

function solution2(s) {
  return s.replaceAll(/A/g, "#");
}

let str = "BANANA";
console.log(solution(str));
console.log(solution2(str));
