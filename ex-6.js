let height = undefined;

function result(height) {
  let nullish = height ?? "Height is not defined";
  return nullish;
}

console.log(result(height)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
