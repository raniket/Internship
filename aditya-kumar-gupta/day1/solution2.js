function flipNInvert(matrix){
    var n = matrix.length;
    for(let i=0; i<n; i++){
        for(let j=0; j<n/2; j++){
            [matrix[i][j], matrix[i][n-j-1]] = [matrix[i][n-j-1]^1, matrix[i][j]^1];
        }
    }

    return matrix;
}

var image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];

var result = flipNInvert(image);
console.log(result);