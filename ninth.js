function swapProperties(obj, p1, p2){
    [obj[p1], obj[p2]] = [obj[p2], obj[p1]];
}

let obj= {p1: "GM", p2:"MG"}
console.log(obj)
swapProperties(obj, "p1", "p2")
console.log(obj)