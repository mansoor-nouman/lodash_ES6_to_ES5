// Chunk
var arr = ["a", "b", "c", "d", "e"];
var result = chunkarr(arr, 2);
console.log(result);
function chunkarr(myarr, sizechunk) {
  var index = 0;
  var arrlen = myarr.length;
  var temparr = [];
  for (index = 0; index < arrlen; index += sizechunk) 
  {
    mychunk = myarr.slice(index, index + sizechunk);
    temparr.push(mychunk);
  }
  return temparr;
}

//reduce
var num = [1,2,3,4,5,6];
var accum = 100;

for(var i=0; i<num.length; i++)
{
    accum = accum + num[i];
}
console.log(accum);

//filter

var numarr = [1,2,3,4,5,6];
var result = [];
let temp = 0;
for(i=0; i<numarr.length; i++)
{
    if(numarr[i]%2 === 0)
    {
        result[temp] = numarr[i];
        temp++;
    }
}
console.log(result);

//find

var arr1 = [12,23,42,465,732];

for(var i=0; i<arr1.length; i++)
{
    if(arr1[i] > 400)
    {
        console.log(arr1[i]);
        break;
    }
}

// sum

var arr1 = [1,2,3,4,5,6];
let result = 0;

for(var i=0; i<arr1.length; i++)
{
    result += arr1[i];
}
console.log(result);