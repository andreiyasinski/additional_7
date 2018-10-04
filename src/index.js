module.exports = function solveSudoku(matrix) {

    let result = matrix;

    let blockI;
    let blockJ;

    let temp1 = [];
    let temp2 = [];

    let eligibleValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for ( let i = 0; i < 9; i++) {
     for ( let j = 0; j < 9; j++) {

        if ( result[i][j] === 0) {


            for (let n = 0; n < 9; n++) {
                blockI = Math.floor(i / 3) * 3;
                blockJ = Math.floor(j / 3) * 3;

                if( result[(blockI + n ) % 3][blockJ + Math.floor(n / 3)] != 0) temp1.push(result[blockI + n % 3][blockJ + Math.floor(n / 3)]);

                if( result[i][n] != 0 ) temp1.push(result[i][n]);

                if( result[n][j] != 0 ) temp1.push(result[n][j]);
            }

            temp2 = eligibleValue.filter(function(item){
                return temp1.indexOf(item) < 0;
            })

            for (let l = 0; l < temp2.length; l++) {
                result[i][j] = temp2[l];
                
                if (solveSudoku(result)){
                 return solveSudoku(result);
                }
            }
                result[i][j] = 0;

                return false;
        }
    }
  }

  return result;

}
