function numberFormat(num){
    return num < 10? '0' + num: num
}

function get12MonDate(){
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var MonDate = []
    for(var i=0; i < 12; i ++){
        MonDate.push({id: year + '-' + numberFormat(month), text: year + '-' + numberFormat(month)});
        if(month == 1){
            month = 12;
            year --;
        }else{
            month --;
        }
    }
    return MonDate
}

console.log(get12MonDate())