function sumOfAll(n){
    var sum = 0;

    for(var i=0; i< n.length; i++){
        sum += n[i];
    }
    return sum
}

console.log(sumOfAll([1,2,5,4,7]));