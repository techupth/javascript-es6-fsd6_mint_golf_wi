const employee1 = {
  name: "John",
  age: 20,
};
function checkNull(result) {
  let resultNull = result ?? "undefined";
  return resultNull;
}
const result1 = employee1.scores?.english;
console.log(checkNull(result1));

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};
function checkNullAddComment(result) {
  let resultNull = result ?? "English score is not defined";
  return resultNull;
}
const result2 = employee2.scores.english;
console.log(checkNullAddComment(result2));
