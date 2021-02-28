//IFFI

/*
function sayHi(){
    console.log("Hii")
}

sayHi()
*/

(function(){
    console.log("Hii from iffi")
}())

//generator

function loopme(userinput){
    for(i=0;i<userinput;i++){
        console.log(i)
    }
}

loopme(5)
VM50:3 0
VM50:3 1
VM50:3 2
VM50:3 3
VM50:3 4

function * loopme(userinput){
    for(i=0;i<userinput;i++){
       yield i
    }
}

loopme(5)
loopme {<suspended>}
var data = loopme(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}