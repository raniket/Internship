var flipAndInvertImage = function (image) {
    let n=image.length;let t;
    for(let i=0;i<n;i++)
    for(let j=0;j<n/2;j++)
    { 
        t=image[i][j];
        image[i][j]=image[i][n-1-j];
        image[i][n-1-j]=t;
    }
    for(let i=0;i<n;i++)
    for(let j=0;j<n;j++)
    { 
        if(image[i][j]==1)
        image[i][j]=0;
        else
        image[i][j]=1;
    }
    return image;
      // Write your code here
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
