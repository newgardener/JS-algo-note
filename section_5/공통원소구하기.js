const log = console.log;
// Set functions
Set.prototype.isSuperset = function (subset) {
  for (let elem of subset) {
    if (!this.has(elem)) return false;
  }
  return true;
};

Set.prototype.union = function (setB) {
  let union = new Set(this);
  for (let elem of setB) {
    union.add(elem);
  }
  return union;
};

Set.prototype.intersection = function (setB) {
  let intersection = new Set(this);
  for (let elem of setB) {
    if (this.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
};

Set.prototype.difference = function (setB) {
  let difference = new Set(this);
  for (let elem of setB) {
    difference.delete(elem);
  }
  return difference;
};

let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

log(setA.isSuperset(setB));
log(setA.union(setC));
log(setA.intersection(setC));
log(setA.difference(setC));

function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
log(solution(a, b));
