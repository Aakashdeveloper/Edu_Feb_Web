array is the collection of homogenous datatype as 
well as hetrogenous

var a = ['a','b','c','d']
var b =[1,3,353,2353454,2,23,98]
var c = [true,true,false,true,false]

var d = [33,4,3,"eds","43",true,"fds",4,4,"fe",6]


var city = ["London","Paris","NewYork","Delhi"]
undefined
typeof(city)
"object"
typeof(city[0])
"string"
city.length
4
city[0]
"London"
city[1]
"Paris"
city[city.length-1]
"Delhi"

var city = ["London","Paris","NewYork","Delhi"]
undefined
city.push("Dubai")
5
city
(5) ["London", "Paris", "NewYork", "Delhi", "Dubai"]
city.push("Helsinki")
6
city
(6) ["London", "Paris", "NewYork", "Delhi", "Dubai", "Helsinki"]
city.pop()
"Helsinki"

["London", "Paris", "NewYork", "Delhi", "Dubai"]
city.pop(2)
city.pop(2)
"Dubai"
city
(4) ["London", "Paris", "NewYork", "Delhi"]
city.pop(2758657436)
"Delhi"
city.unshift('Nice')
4
city.unshift('Hongkong')
5
city
(5) ["Hongkong", "Nice", "London", "Paris", "NewYork"]
city.shift()
"Hongkong"

push> add at the end
pop> remove from the end
shift> remove first value
unshift> add as a first value

var a = ["Hongkong", "Nice", "London", "Paris", "NewYork"]
var a = ["Hongkong", "Nice", "London", "Paris", "NewYork"]
undefined
a.slice(2,4)
(2) ["London", "Paris"]
a.splice(2,0,'Mumbai','Boston')
[]
a
(7) ["Hongkong", "Nice", "Mumbai", "Boston", "London", "Paris", "NewYork"]
a.splice(3,1)
["Boston"]
a
(6) ["Hongkong", "Nice", "Mumbai", "London", "Paris", "NewYork"]
a.splice(4,1,'Amsterdam','Pune')
["Paris"]
a
(7) ["Hongkong", "Nice", "Mumbai", "London", "Amsterdam", "Pune", "NewYork"]

var a = [1,"a","b",2]
var b = [3,'c','d',4]
undefined
a+b
"1,a,b,23,c,d,4"
a.concat(b)
(8) [1, "a", "b", 2, 3, "c", "d", 4]

var myarr = ["Hongkong", "Nice", ['Bmw','Audi',['Red','Yellow','Green'],'Kia'], "London", "Paris", "NewYork"]

var myarr = ["Hongkong", "Nice", ['Bmw','Audi',['Red','Yellow','Green'],'Kia'], "London", "Paris", "NewYork"]
undefined
myarr[2]
(4) ["Bmw", "Audi", Array(3), "Kia"]
myarr[2][0]
"Bmw"
myarr[2][1]
"Audi"
myarr[2][2]
(3) ["Red", "Yellow", "Green"]
myarr[2][2][1]
"Yellow"
myarr[2][2][2]
"Green"

var myarr = ["Hongkong", "Nice", ['Bmw','Audi',['Red','Yellow','Green'],'Kia'], "London", "Paris", "NewYork"]
undefined
myarr.flat()
(9) ["Hongkong", "Nice", "Bmw", "Audi", Array(3), "Kia", "London", "Paris", "NewYork"]
myarr.flat(1)
(9) ["Hongkong", "Nice", "Bmw", "Audi", Array(3), "Kia", "London", "Paris", "NewYork"]
myarr.flat(2)
(11) ["Hongkong", "Nice", "Bmw", "Audi", "Red", "Yellow", "Green", "Kia", "London", "Paris", "NewYork"]

var a = ["Hongkong", "Nice", "Bmw", "Audi", "Red", "Yellow", "Green", "Kia", "London", "Paris", "NewYork"]
undefined
a.indexOf('Paris')
9
a.indexOf('Hongkong')
0
a.indexOf('Red')
4
a.indexOf('Delhi')
-1
a.indexOf('Amsterdam')
-1

