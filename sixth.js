function countOcc(str, substr){
    var p1= 0;
    var n1= str.length;
    var n2= substr.length;
    var count= 0;
    for(let i= 0; i< n1; i++){
        if(str[i] == substr[p1]){
            p1++; 
        } else {
            p1= 0; 
            if(str[i] == substr[p1]) p1++; 
        }

        if(p1 == n2){
            count++; 
            p1= 0;
        }
    }
    console.log(count)
}

function countOccBetter(str, substr) {
    let n = str.length;
    let nn = substr.length;
    let count = 0;

    for (let i = 0; i <= n - nn; i++) {
        let found = true;
        for (let j = 0; j < nn; j++) {
            if (str[i + j] !== substr[j]) {
                found = false;
                break;
            }
        }
        if (found) count++;
    }

    console.log(count);
}

countOccBetter("aaaa", "aa")