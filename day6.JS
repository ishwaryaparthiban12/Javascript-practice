// Array Methods

let food=["Idly","Dosa","Vada","Pongal","Poori"]

// 1.push()->Add element at th end of array and returns the new length of a array
// console.log(food.push("Kesari"))
// console.log(food)

// 2.pop()->Remove last element from an array and returns it
// console.log(food.pop())
// console.log(food)

// 3.unshift()->Insert new element at start of the array and returns newlength
// console.log(food.unshift("Podi Idly"))
// console.log(food)

// 4.shift()->remove first value and returns it
// console.log(food.shift())
// console.log(food)

// 5.toString()
// console.log(food.toString())

// 6.join()
// console.log(food.join("-"))

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// 7.concat()
// let list1=[200,400,600,800,1000]
// let list2=[300,600,900,1200,1500]
// let list=list1.concat(list2)
// console.log(list)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8.slice()->returns secction of an array
// let number=[25,17,19,15,12,290,1030,2678,234,356,100,12]
// console.log(number.slice(3,6))
// 3<6-3,4,5

// 9.splice()->syntax:array.splice(start (index),deletecount,newvalue)
// number.splice(2,4)
// console.log(number)

// number.splice(1,0,3450)
// console.log(number)

// number.splice(1,2,8000,9000,10000)
// console.log(number)

// 10.indexOf()&lastIndexOf()->returns the index of the given number
// console.log(number.indexOf(12))
// console.log(number.lastIndexOf(12))

// 11.includes()>returns True or False
// console.log(number.includes(1030))
// console.log(number.includes(2345))

// console.log([78,99,1000,245,678,345].includes(5))
// console.log([245,36777,999,20,278].includes(245))

// console.log([22,44,66,77,88,22,33,66].indexOf(22))
// console.log([23,33,333,456,778,333,99,27,333].lastIndexOf(333))

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// 11.for each loop
// let result=[999,1021,345,678,989,1000,1065]
// result.forEach(element=>console.log(element))

// add grace mark 5 to all 
// result.forEach(element=>console.log(element+5))

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// 12.map()
// Example1
// let medicinePrice=[200,300,450,200,323,346,199,178,168]
// console.log(medicinePrice.map(value=>value+20))

// Example2
// let toys=["DancingToy","Talking Tom","Fish Lighting","Cause&Effect toy"]
// console.log(toys.map(value=>value+("-"+"Age 0-6m")))

// Example3
// let subjects=["tamil","english","maths","science","socialscience"]
// console.log(subjects.map(value=>value.toUpperCase()))

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// 13.filter()
// Example1
// let vegetables=["Carrot","Beetroot","Brinjal","Ladiesfinger","Capsicum"]
// console.log(vegetables.map(value=>value.length>7))
// console.log(vegetables.filter(value=>value.length>7))

// Example2
// let chocolates=["Diarymilk","KitKat","FiveStar","MilkyBar",]
// console.log(chocolates.filter(value=>value.includes("KitKat")))

// Example3->voting eligibility
// let age=[78,99,33,2,14,56,78,3,24,13,23,67,99,12,11,7,4,77,3]
// console.log(age.filter(value=>value>=18))

// Example4->leap year or not
// let year=[1997,1989,2025,1992,2024,2027,2026,2000,2014,2018,2012,2019,2024,2010]
// console.log("Leap Years-"+year.filter(value=>value%4==0))

// Example5->Voting and Driving age eligibility
// let age=[12,13,24,18,22,19,17,21,20,33,45,78,99,65,47,38,29,19,18]
// console.log("Eligibility for voting and driving age:"+age.filter(value=>value>=18&&value>=21))

// -------------------------------------------------------------------------------------------------------------------------------------------------

// 14.reduce()
// Example1
// let message=["to","wolrd","Disney"]
// console.log(message.reduce((value,data)=>value+data,"Welcome"))

// Example2
// let result=[20,18,19,19,18,17,16,14,13]
// console.log(result.reduce((value,data)=>value+data,0))  

// 15.reverse()
let mark=[1000,900,800,700,600,500,400,300,200,100]
console.log(mark.reverse())