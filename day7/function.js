var a = 10
var b = 20
a+b
30

//es5
function add(a,b){
    return a+b
}

add(1,2)
3
add(87,767)
854
add('a','b')
"ab"

function isEven(userInput){
    var output ;
    if(userInput%2==0){
        output=`${userInput} is even`
    }else{
        output=`${userInput} is odd`
    }

    return output
}

isEven(5)
"5 is odd"
isEven(4)
"4 is even"

//es6
let add = (a,b) => { return a+b }
add(1,2)
3

function add(a,b){
    return a+b
}

var add = (a,b) => {
    return a+b
}


function language(name){
    this.name
}


var hindi = new language("hindi")