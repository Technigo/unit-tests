var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var filtered = array.filter(function(value, index, arr){ 
    return value < array[2];


})

console.log(filtered)