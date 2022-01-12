
var flipAndInvertImage = function (image)
{
  for(let i=0;i<image.length;i++)
  {
    for(let j=0;j<(image[0].length/2);j++)
    {
      if(image[i][j]==0)
      {
        image[i][j]=1;
      }
      else
      {
        image[i][j]=0;
      }
      let t=image[i][j];
      image[i][j]=image[i][image[0].length-j-1];
      image[i][image[0].length-j-1]=t;
      if(image[i][j]==0)
      {
        image[i][j]=1;
      }
      else {
        image[i][j]=0;
      }

    }
    if(image[0].length%2!=0)
    {
      let k=(image[0].length-(image[0].length%2))/2;
      if(image[i][k]==0)
      {
        image[i][k]=1;
      }
      else {
        image[i][k]=0;
      }
    }
  }
  return image;
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
