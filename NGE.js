var arr = [1,3,2.4];

var n = arr.length;
var next = 0;

function NGE(arr,n){
for(var i = 0; i<n; i++){
    next = -1;
    for(var j = i+1; j<n; j++){
if(arr[i] < arr[j]){
    next = arr[j];
    break;
}
    }
    console.log(next);
}
//console.log(next);
}