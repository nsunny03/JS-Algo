let arrayList = [5,1,3,9,4,11];
let missingNum = [];

let arrayLength = Math.max.apply(Math, arrayList);

for(var i=0; i < arrayLength; i++){
    if(arrayList.indexOf(i) < 0){
        missingNum.push(i);
    }
}

console.log(missingNum)