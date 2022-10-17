const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(input) {
  function mineCount(input, i, j) {
    let c = 0;
    const prev = input[i - 1];
    const curr = input[i];
    const next = input[i + 1];
    [prev, curr, next].forEach(matrixRow => {
      if (matrixRow) {
        if (matrixRow[j - 1] === true) c++;
        if (matrixRow[j] === true) c++;
        if (matrixRow[j + 1] === true) c++;
        //     console.log([prev, curr, next])
        // console.log(c)
      }
    })
    return c;
  }


  return input.map((a, i) => {
    return a.map((b, j) => {
      // console.log(b)
      return b == true ? mineCount(input, i, j) - 1 : mineCount(input, i, j);
    })
  })
}

module.exports = {
  minesweeper
};
