//---------Масивы---------

//var array = [1,2,3,4,5,6,7,8,9,10];
//for (
//    var i = 0;
//    i < array.length; i++) {
//    console.log( array [i] );
//}
//
//
//var array = [1,2,3,4,5,6,7,8,9,10];
//for (
//    var i = array.length;
//    i > 0; --i){
//    console.log( array[--i] );
//}

//-------calc-----

/*----число-----*/

//function Sum(a,b){
//
//    if (!isNaN(parseFloat(a,b)) && isFinite(a,b))
//        console.log('число');
//    else
//        console.log('не число!');
//    var c = a + b;
//
//    return c;
//}
//console.log(Sum(200,100));
//
///*----не число----*/
//
//function Sum(a,b){
//
//    if (!isNaN(parseFloat(a,b)) && isFinite(a,b))
//        console.log('число');
//    else
//        console.log('не число!');
//    var c = a + b;
//
//    return c;
//}
//console.log(Sum('ааа',100));








/*----Date----*/

//shoveDate();
//function shoveDate(){
//    setInterval(function(){
//        console.clear();
//        var time = new Date();
//        var h = time.getHours();
//        var m = time.getMinutes();
//        var s = time.getSeconds();
//        var fullTime = h + ':' + m + ':' + s;
//        console.log(fullTime);
//    }, 1000);
//}


shoveDate();
function shoveDate(){
    setInterval(function(){
        console.clear();
        var time = new Date();
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();
        if (s < 10) s = '0' + s;
        var fullTime = h + ':' + m + ':' + s;
        console.log(fullTime);
    }, 1000);
}