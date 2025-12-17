function checkPalindrome(str){
    var stack= [] 
    for(let c= 0; c < str.length; c++){
        stack.push(str[c])
    }
    let res= ""; 
    for(let i= 0; i < str.length; i++){
        res+= stack.pop()
    }

    if(str == res){
        console.log("YES")
    } else {
        console.log("NO")
    }
}

checkPalindrome("telugu")