function printDay(){
    var num=  parseInt(document.getElementById("in").value) 
    var result= "" 
    switch(num){
        case 1: result= "Monday"
            break;
        case 2:
            result= "Tuesday"
            break;
        case 3:
            result="Wednesday"; 
            break;
        case 4:
            result= "Thursday"; 
            break;
        case 5:
            result= "Friday"; 
            break;
        case 6:
            result= "Saturday"; 
            break;
        case 7:
            result= "Sunday";
        default: 
            result="Invalid number!"
    }

    document.getElementById("res").innerHTML= "The day is "+result;
}