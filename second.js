function compute(){
    var num=  parseInt(document.getElementById("in").value) 
    var sum= 0
    while(num > 0){
        let rem= num % 10 
        sum+= rem 
        num= Math.floor(num/10)
    }
    document.getElementById("res").innerHTML= "Result is "+ sum; 
}