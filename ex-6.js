let height = undefined;
let result;

function checkUndefined(height) {
  return (result = height ?? "Height is not defined");
}
checkUndefined(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
