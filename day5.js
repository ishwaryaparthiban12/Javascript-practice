// 1.Math Methods
// console.log(Math.E)
// console.log(Math.LN2)
// console.log(Math.LN10)
// console.log(Math.LOG2E)
// console.log(Math.LOG10E)
// console.log(Math.PI)
// console.log(Math.sqrt(81))
// console.log(Math.cbrt(64))

// round->Nearest Integer->Ex:8.5->9,8.4->8
// console.log(Math.round(77.5))
// console.log(Math.round(77.4))

// ceil->Up nearest Value->(except .0 , otherwise ceil to up value)-Ex:20.5=21,20.4=21,20.0=20
// console.log(Math.ceil(3098.5))
// console.log(Math.ceil(3098.4))
// console.log(Math.ceil(3098.0))

// floor->Down nearest value->Ex:36.5=36,36.4=36
// console.log(Math.floor(4056.5))
// console.log(Math.floor(4056.4))

// trun()->Remove the Decimal Value
// console.log(Math.trunc(109234.9))

// console.log(Math.sin(0))
// console.log(Math.pow(20,3))

// abs->Keep the Negative value as Positive value
// console.log(Math.abs(2000-20566))

// console.log(Math.min(12,19,15,27))
// console.log(Math.max(12,19,27,15))

// random()->Generates random Values between 0.0 to 1.0
// console.log(Math.random())

// Task:1.Generate 4 digit otp
// let r=Math.floor(Math.random()*10000)+1
// console.log(r)

// Task:2.Generate 6 digit otp
// let r=Math.floor(Math.random()*1000000)+1
// console.log(r)

// Task:3.Generate Random password using lowercase,uppercase,special characters
                 





















// Generate Random  Numbers between 1-10
// let r=Math.floor(Math.random()*10)+1
// console.log(r)

// log values
// console.log(Math.log(10))
// console.log(Math.log2(8))
// console.log(Math.log10(1000))

// console.log(Math.exp(10))

// console.log(Math.sin(0))
// console.log(Math.tan(0))
// console.log(Math.cos(0))

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// 2.Date And Time,Calender
// const today=new Date()
// console.log(today)
// console.log(today.getDate())
// 0-sunday,1-monday
// console.log(today.getDay())
// console.log(today.getFullYear())
// console.log(today.getHours())
// console.log(today.getMinutes())
// console.log(today.getSeconds())

// month->Starts with 0 as jan so add 1 -get an exact order 1 as jan,2 as feb
// console.log(today.getMonth()+1)

// console.log(today)
// today.setFullYear(2030)
// console.log(today)

// console.log(new Date().toDateString())
// console.log(new Date().toTimeString())
// console.log(new Date().toLocaleDateString())
// console.log(new Date().toLocaleTimeString())

// Task:set date,time,calender
// const today=new Date()
// console.log(today)
// today.setDate(12)
// console.log(today)

// // set baby date of birth
// let date=new Date()
// date.setFullYear(2025,4,15)
// console.log(date)

// date.setMonth(4)
// console.log(date)

// date.setYear(1997)
// console.log(date)

// date.setTime(7)
// console.log(date)

// date.setHours(5)
// console.log(date)

// date.setMinutes(42)
// console.log(date)

// date.setHours(15,14,10)
// console.log(date)

// let date = new Date();
// console.log("Before:", date.toLocaleString());
// date.setMinutes(42);
// console.log("After :", date.toLocaleString());

// ---------------------------------------------------------------------------------------------------------------------------------

// 3.object method
// let student={
//     name:"Ishwarya",
//     age:28,
//     DOB:"12.03.1997",
//     Course:"FSD",
//     Skills:["Java","SpringBoot","HTML","CSS","BOOTSTRAP","JAVASCRIPT"]
// }
// console.log(student)

// dotted notation
// console.log(student.age)

// Squarebracket notation
// console.log(student["Course"])

// Create data
// student.city="Chennai"
// console.log(student)

// Update data
// student.age=29
// console.log(student)

// Delete data
// delete student.age
// console.log(student)

// console.log(Object.keys(student))
// console.log(Object.values(student))

// console.log(Object.entries(student))

// let m={a:19,b:15,c:12}
// let n={d:12,e:122,f:123}
// let o=Object.assign(m,n)
// console.log(o)

// Nested Object
// let student={
//     fname:"Ishwarya",
//     age:28,
//     marks:{
//         Java:90,
//         SpringBoot:89,
//         HTML:90,
//         CSS:90,
//     }
// }
// console.log(student)
// console.log(student.marks)
// console.log("Java mark:"+student.marks.Java)

let student={
    name:"Prithvi",
    age:20,
    marks:{
        Java:90,
        SpringBoot:89,
        HTML:90,
        CSS:90,
    },
    greet:function(){console.log("I am "+this.name+"-"+"Age:"+this.age)}
}
student.greet()














