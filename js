######     Switch Cases    ######

var date = new Date();
var today = date.getDay();
switch (today){
    case 0:
        console.log('today is sunday');
        break;
    case 1:
        console.log('today is Monday');
        break;
    case 2:
        console.log('today is Tuesday');
        break;
    case 3:
        console.log('today is Wednesday');
        break;
    case 4:
        console.log('today is Thursday');
        break;
    case 5:
        console.log('today is Friday');
        break;
    case 6:
        console.log('today is Saturday');
        break;
    default:
        console.log('not a day');
}

#### array sum #####

var arr1=[1,2,3,4,5]
var arr2=[10,20,30,40,50]
var arr3=[2,4,6,8,10]
function arrAdd(arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum);
}
arrAdd(arr1);
arrAdd(arr2);
arrAdd(arr3);

