
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let i = 0;
  let arr = [];
  if (matrix != undefined){
    for (let e of matrix){
      arr = (++i%2)?arr.concat(e):arr.concat(e.reverse());
    }
  }
  return arr;
}
