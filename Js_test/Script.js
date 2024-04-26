// Question 1

function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    return a/b
}

console.log("Question 1")
console.log(add(1,2))
console.log(sub(9,2))
console.log(mul(2,5))
console.log(div(4,2))

// Question 2

console.log("Question 2")


function even(arr){
    let res = []
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i]%2==0){
            res.push(arr[i])
        }
    }
    return res
}
 
console.log(even([1,2,3,4,5,6]))

// Question 3


console.log("Question 3")


function mul2(arr){
    let res = []
    for(let i = 0 ; i<arr.length;i++){
        res.push(arr[i]*2)
    }
    return res
}
 
console.log(mul2([1,2,3,4,5,6]))

// Question 4

console.log("Question 4")

function captial(str){
    let s = str.charAt(0).toUpperCase()
    let s1 = str.slice(1)
    return s+s1
}

console.log(captial("karan"))