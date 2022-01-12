// ------------------ Solution  ------------------

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 function invertImage(image){

    for(let i =0;i<image.length;i++){
        for(let j =0;j<image[i].length;j++){
            image[i][j] = image[i][j]==1? 0:1;   //inverting the image
        }
    }
    return image;
}
 var flipAndInvertImage = function (image) {
    // Write your code here
    for(let i=0;i<image.length;i++){
        for(let j =0;j<image[i].length/2;j++){
            let temp = image[i][j];
            image[i][j] = image[i][image.length-j-1];
            image[i][image.length - j - 1] = temp;
        }
    }
    return invertImage(image);

  };
  
  
  // ------------------------ Code Driver ---------------------------
  
  let input1 = [[1,1,0],[1,0,1],[0,0,0]]
  let output1 = [[1,0,0],[0,1,0],[1,1,1]]
  
  
  let input2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
  let output2 = [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
  
  
  let ans1 = flipAndInvertImage(input1)
  console.log('Expected : ', output1, '\nReceived : ', ans1)
  
  console.log('\n')
  
  let ans2 = flipAndInvertImage(input2)
  console.log('Expected : ', output2, '\nReceived : ', ans2)


