
module.exports = function towelSort (matrix =[]) {
  return  [].concat(...matrix.map((arr, index) =>  index % 2 ? arr.sort((a,b)=>b-a) : arr.sort((a,b)=>a-b) ))
}
