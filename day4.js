// looping statements
// 1.do while 
// let i=1
// do{
//     console.log(i)
//     i++
// }while(i<=10)
// ------------------------------------------------------------------------------
// 2.while 
// let m=1
// while(m<=8){
//     console.log(m)
//     m++
// }
// ---------------------------------------------------------------------------------------------
// 3.Check even or odd using while loop
// let i=1
// while(i<=20){
//     if(i%2==0){
//     console.log(i+"- Even Number")
//     }else{
//     console.log(i+"-Odd Number")
//     }i++
// }
// ----------------------------------------------------------------------------------------------------
// 4.Multiplication Table Using while loop
// let i=1
// while(i<=15){
//     console.log(i+"*5="+i*5)
//     i++
// }
// ---------------------------------------------------------------------------------------------------------
// 5.Break Statement->Stop the loop Immediately
// let i=1
// while(i<=100){
//     if(i==5){
//         console.log(i)
//         break
//     }
//     i++
// }
// ----------------------------------------------------------------------------------
// 6.For loop->Multiplication table using for loop
// for( let i=1;i<=15;i++){
//     console.log(i+"*7="+i*7)
// }
// --------------------------------------------------------------------------------------
// 7.Continue ->Skip the current iteration and moves to the next step
// for(let i=1;i<=10;i++){
//     if(i==7)continue
//     console.log(i)
// }
// Break->terminate the loop Immediately
// for(let i=0;i<=15;i++){
//     if(i==10)break
//     console.log(i)
// }
//----------------------------------------------------------------------------------------------------------------
// 8.Check Even or odd Number using for loop
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i+"-Even Number")
//     }else{
//         console.log(i+"-Odd Number")
//     }
// }
// -------------------------------------------------------------------------------------------------------
// 9.Sum of first N natural numbers
// let sum=0
// let value=15
// for(let i=1;i<=value;i++){
//     sum+=i
// }
//  console.log("Sum of First 15 Numbers="+sum)
// -----------------------------------------------------------------------------------------------------
// 10.Factorial program
// let n=10
// let fact=1
// for(let i=1;i<=n;i++){
//     fact*=i
// }
// console.log("Factorial of first 10 Numbers="+fact)
// -----------------------------------------------------------------------------------------------------------
// 11.Reverse a number(30 to 10)
// for(let i=30;i>=10;i--){
//     console.log(i)
// }
// *******************************************************************************************************************************************************

// Functions
// user Defined & Predefined Functions
// Types
// 1.without argument,without return type
// function show(){
//     console.log("Welcome to Dubai")
// }
// show()

// function mul(){
//     let m=3067
//     let n=2345
//     let result=m*n
//     console.log(result)
// }
// mul()
// ----------------------------------------------------------------------------------------------------------
// 2.with argument,without return type
// function sub(m,n,o){
//     console.log(m-n-o)
// }
// sub(3000,1000,1000)
// ----------------------------------------------------------------------------------------------------------
// 3.without argument,with return type
// function add(){
//     let m=15
//     let n=16
//     return m+n
// }
// console.log(add())
// -------------------------------------------------------------------------------------------------------
// 4.with argument,without return type
// function div(i,j,k,l){
//     return i/j/k/l
// }
// console.log(div(200,50,5,2))
// ***************************************************************************************************************************************

// String And String Methods
// let fname="Pranitha"
// console.log(fname)
// length=1,index/position=0

// let result="Hello World"
// console.log(result.length)
// console.log(result.toUpperCase())
// console.log(result.toLowerCase())
// console.log(result.charAt(4))

// let answer="Welcome to Dubai,Dubai Ferry World"
// console.log(answer.indexOf("Dubai"))
// console.log(answer.lastIndexOf("Dubai"))

// console.log(answer.includes("Ferry"))
// console.log(answer.startsWith("W"))
// console.log(answer.endsWith("World"))

// let answer="SpringBoot"
// console.log(answer.slice(0,3))
// console.log(answer.substring(1,5))
// console.log(answer.substr(1,3))

// let result="I Enjoy Travel"
// console.log(result)
// console.log(result.replace("Enjoy","Love"))

// let answer="Cat Call"
// console.log(answer)
// console.log(answer.replace("C","B"))
// console.log(answer.replaceAll("C","B"))

// let answer="               Ishwarya               "
// console.log(answer)
// console.log(answer.trimStart())
// console.log(answer.trimEnd())

// let fname="Ishwarya"
// let lname="parthiban"
// console.log(fname.concat(" ",lname))

let answer="JavaScript"
console.log(answer.repeat(5))

let result="Banana, Apple, Watermelon, Orange"
console.log(result.split())