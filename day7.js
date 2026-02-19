// ES-6
// 1.let
// let age=28
// age=29
// console.log(age)

// 2.const
// const age=28
// console.log(age)

// 3.String
// fname="Ishwarya"
// lname="Parthiban"
// console.log(`First Name is${fname} Last name is ${lname}`)
// console.log(`I am Ishwarya -"Full Stack Batch"-Completed BacEnd-"FrontEnd Ongoing"`)

// 4.Arrow Functions

// Example1:
// const add=(m,n)=>{return m+n}
// console.log(add(3098999,879000))

// Example2:Without arugument,without return type
// let add=()=>{let m=100;let n=200; result=m+n;console.log(result)}
// add()

// Example3:with arugument,without return type
// Example1
// let mul=(i,j,k,l)=>{
//     console.log(i*j*k*l)
// }
// (mul(20,20,20,20))

// Example2
// let add=(a,b,c,d,e)=>{
//     console.log(a+b+c+d+e)
// }
// (add(12,12,12,12,12))
// console.log(add(12,12,12,12,12))

// Example4:without argument,with return type
// let mul=()=>{
//     m=9
//     n=10
//     o=80
//     result=m*n*o
//     return result/3
// }
// console.log(mul())

// Example5:with argument,with return type
// let sub=(x,y,z)=>{
//     return x-y-z
// }
// console.log(sub(200,50,20))

// Example 6
// function login(username="admin",password="admin123"){
//     console.log(username,password)
// }
// login()
// login("ishu","7890sihue")
// login("prithvi")

// 7.Modules-Export and import
// import{add,sub,mul,div,mod}from"./math.js"
// console.log(add(200,30))
// console.log(sub(200,90,20))
// console.log(mul(30,20,4,3))
// console.log(div(8,2,2))
// console.log(mod(144,2))

// 8.OOPS- class & object-Example1
// class student{
//     constructor(name,age,course){
//         this.name=name
//         this.age=age
//         this.course=course
//     }
//     display(){
//         console.log(this.name)
//         console.log(this.age)
//         console.log(this.course)
//     }
// }

// let s1=new student("Ishwarya",18,"ECE")
// s1.display()
// let s2=new student("Pranitha",18,"CSE")
// s2.display()
// let s3=new student("Prithvi",19,"EEE")
// s3.display()

// Example2
// class doctor{
//     constructor(doctorId,doctorName,doctorDepartment){
//         this.doctorId=doctorId
//         this.doctorName=doctorName
//         this.doctorDepartment=doctorDepartment
//     }
//     display(){
//         console.log("Id:"+this.doctorId)
//         console.log("DoctorName:"+this.doctorName)
//         console.log("Department:"+this.doctorDepartment)
//     }
// }
// let d1=new doctor("cn1890","Dr.Vignesh","Pediatrics")
// d1.display()
// let d2=new doctor("cn123","Dr.Keerthana","Obstetrics&Gynaecology")
// d2.display()
// let d3=new doctor("cn456","Dr.Sathya","Obstetrics")
// d3.display()

// 9.Inheritance-Example1
// class shop{
//     greet(){
//         console.log("Hi Welcome to GRT")
//     }
// }
// class customer extends shop{
//     purchase(){
//         console.log("Choose Section-Diamond/Gold/silver")
//     }
// }
// let c1=new customer()
// c1.greet()
// c1.purchase()

// Example2
// class vehicle{
//     constructor(brand, color, price){
//         console.log("Vehicle details")
//         console.log(brand)
//         console.log(color)
//         console.log(price)
//     }
//     drive(){
//         console.log("Smooth Driving")
//     }
// }
// class car extends vehicle{
//     type(){
//         console.log("More Experience")
//     }
// }
// let c1=new car("HondaCity", "White",1500000)
// c1.drive()
// c1.type()
// let c2=new car("Renault Lodge", "Silver",1200000)
// c2.drive()
// c2.type()

// 10.Spread operator(unpack)(Merge/Copy the Value)
// let minorAge=[12,10,13,8,9,15,17,7,6,3]
// let adultAge=[29,20,35,27,20,22,24,25]
// let seniorCitizenAge=[65,67,68,69,70,88]
// let combinedAge=["Pepole ages",...adultAge,...seniorCitizenAge]
// console.log(combinedAge)

// Copy Array
// let m=[78,28,22,33,66]
// let n=[...m,90,100,110,120]
// console.log(n)

// Merge Array
// let id=[11,20,32,42,52]
// let fname=["Pranitha","Prithvi","Kayal","Pranitha","Vijay"]
// console.log([...id,...fname])

// let p1=["Grammasala","Chicken Masala Powder","Chilli Powder","Amchur powder"]
// let p2=["Pepper Powder","Fennel powder","Jeera Powder"]
// let Powder=[...p1,...p2,"Briyani Masala","Chicken tandoori masala"]
// console.log(Powder)

// 11.Rest Parameter(pack)->collectmultiple values into a single array
// function data(m,n,o,...p){
//     console.log(m)
//     console.log(n)
//     console.log(o)
//     console.log(p)
// }
// data(67,99,800,99,88,11,22,33,44,55,66,77,100)

// 12.Destrcting-Array&object 
// let arr=[12,24,36,48,60]
// let [m,n,o,p,q,r,s]=arr
// console.log(m)
// console.log(n)
// console.log(o)
// console.log(p)
// console.log(q)
// console.log(r)
// console.log(s)

// let arr=["Kurti","Leggins","Shawl","Saree","Half Saree"]
// let [m,n,o,p,q,r,s]=arr
// console.log(m)
// console.log(n)
// console.log(o)
// console.log(p)
// console.log(q)
// console.log(r)
// console.log(s)

// Object
// let emp={fullname:"Pranitha",id:20290,dept:"Civil"}
// let{fullname,id,dept}=emp
// console.log(fullname,id,dept)

let ball={type:"cricketball",price:70}
let{type,price}=ball
console.log(type,price)