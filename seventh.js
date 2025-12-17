function revstr(str){
    var stack= [] 
    for(let c= 0; c < str.length; c++){
        stack.push(str[c])
    }
    let res= ""; 
    for(let i= 0; i < str.length; i++){
        res+= stack.pop()
    }

    console.log(res);
}

revstr("sahtiwk")