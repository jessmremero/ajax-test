var numbers = [21,34,1,3,53,2,99,6,3]
var i,j,temp
for(i=0;i<numbers.length;i++){
    for(j=0;j<numbers.length-1;j++){
    if (numbers[j+1]<numbers[j]){
       temp=numbers[j]
       numbers[j]=numbers[j+1]
       numbers[j+1]=temp
    }
        }
    }
console.log(numbers)