// Control Statements
// if Statement
// 1.voting eligibility
// let age=14
// if(age>=18){
//     console.log("Eligible to vote")
// }
// if(age<18){
//     console.log("Not Eligible to Vote")
// }
// ---------------------------------------------------------------------------------------------------------
// 2.if ...else statement
// 1.Voting Eligibility
// let age=18
// if(age>=18){
//     console.log("Eligible To Vote")
// }
// else{
//     console.log("Not Eligible To Vote")
// }
// ----------------------------------------------------------------------------------------------------------------
// 2.Pass or Fail
// let mark=23
// if(mark>=35){
//     console.log("Student is passed")
// }
// else{
//     console.log("Student is Failed")
// }
// ----------------------------------------------------------------------------------------------------------------------------
// 3.Odd or Even 
// let value=12
// if(value%2==0){
//     console.log("It is  a Even Number")
// }
// else{
//     console.log("It is a Odd Number")
// }
// -----------------------------------------------------------------------------------------------------------------------------------
// 4.Largest of two numbers
// let number1=1209
// let number2=2209
// if(number1>number2){
//     console.log("Number1 is Largest Number")
// }
// else{
//     console.log("Number2 is Largest Number")
// }
// ------------------------------------------------------------------------------------------------------------------------------------------
// 5.leap Year or not
// let year=2025
// if(year%2==0){
//     console.log("It is a leap year")
// }
// else{
//     console.log("It is not a leap year")
// }
// -------------------------------------------------------------------------------------------------------------------------------------
// ladder ...if...else
// 1.Largest number
// let m=2508
// let n=3505
// let o=5678
// if(m>n && m>o){
//     console.log("M is largest Number")
// }
// else if(n>m && n>o ){
//     console.log("N is Largest Number")
// }
// else{
//     console.log("O is the largest number")
// }
// ------------------------------------------------------------------------------------------------------------------------------------------------------
// 2.Student Evaluation
// let mark=45
// if(mark>=90){
//     console.log("You Got S Grade")
// }
// else if(mark>=80){
//     console.log("You Got A Grade")
// }
// else if(mark>=70){
//     console.log("YOu Got B Grade")
// }
// else if(mark>=60){
//     console.log("You got C Grade")
// }
// else if(mark>=50){
//     console.log("You Got D Grade")
// }
// else{
//     console.log("You Are Failed ..Better luck Next Time")
// }
// -----------------------------------------------------------------------------------------------------------------------------------
// 3.check number is positive,Negative zero
// let number=-22
// if(number>0){
//     console.log("The Number Is Positive")
// }
// else if(number==0){
//     console.log("The Number Is Zero")
// }
// else{
//     console.log("The Number Is Negative")
// }
// ---------------------------------------------------------------------------------------------------------------------------------
// Nested if else Statement
// 1.Largest of the numbers
// let m=159
// let n=145
// let o=19
// if(m>n){
//     if(m>o){
//         console.log("M is Largest Number")
//     }else{
//         console.log("O is Largest number")
//     }
// }else{
//     if(n>o){
//         console.log("N is Largest Number")
//     }
//     else{
//         console.log("O is Largest Number")
//     }
// }
// -----------------------------------------------------------------------------------------------------------------------------------
// 2.login check
// let username="pranitha"
// let password="pranitha121519"
// if(username=="pranitha"){
//     if(password=="pranitha121519"){
//         console.log("Login Successful")
//     }
//     else{
//         console.log("Password is incorrecct")
//     }
// }
// else{
//     console.log("Invalid Username")
// }
// ------------------------------------------------------------------------------------------------------------------------------------
// Ternary Operator
// 1.Voting Eligibility
//  let age=18
//  age>=18 ? console.log("Eligibile to Vote"):console.log("You are not Eligible to vote")
// ---------------------------------------------------------------------------------------------------------------------------------------
// 2.Student Evaluation
// let mark=90
// mark>=35 ? console.log("You Are Passed"):("You Are Failed")
// -------------------------------------------------------------------------------------------------------------------------------------
// Switch Case
// 1.Day Calculation
// let day=150
// switch(day){
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("sunday")
//         break
//     default:
//         console.log("Invalid Number")
//         break
// }
// ------------------------------------------------------------------------------------------------------------
// Some Another Examples
// 1.check character type using ladder if else 
// let char="+"
// if(char >= "A" && char <="Z"){
//     console.log("Uppercase Letter")
// }
// else if(char >= "a" && char <= "z"){
//     console.log("Lowercase Letter")
// }
// else if(char >= "0" && char <= "9"){
//     console.log("Number")
// }
// else{
//     console.log("It is special character")
// }
// ---------------------------------------------------------------------------------------------------------------------------
// 2.Check Temperature using Ladder if else
// let temp=15
// if(temp<10){
//     console.log("Temperature: "+temp+"-"+"It is a cold temperature")
// }
// else if(temp<20){
//     console.log("Temperature:"+temp+"-"+"It is a cold Weather")
// }
// else if(temp<30){
//     console.log("Temperature:"+temp+"-"+"It is a warm weather")
// }
// else{
//     console.log("Temperature:"+temp+"-"+"It is a hot weather")
// }
// --------------------------------------------------------------------------------------------------------------------------
// 3.check a day is WeekEnd/weekday using ladder if else
// let day=3
// if(day==1){
//     console.log("It is a Saturday")
// }
// else if(day==2){
//     console.log("It is a Saturday")
// }
// else{
//     console.log("It is a Weekday")
// }
// ---------------------------------------------------------------------------------------------------------------------------------------
// 4.Check time of a day using ladder if else
// let time=23
// if(time<=11){
//     console.log("Good Morning")
// }
// else if(time<=16){
//     console.log("Good Afternoon")
// }
// else if(time<=20){
//     console.log("Good Evening")
// }
// else{
//     console.log("Good Night")
// }
// -------------------------------------------------------------------------------------------------------
// 5.Check BMI using Ladder if else
// let BMI=17
// if(BMI<18.5){
//     console.log("You are Underweight")
// }
// else if(BMI<25){
//     console.log("You are  Normalweight")
// }
// else if(BMI<30){
//     console.log("You are Overweight")
// }
// else{
//     console.log("oh You are obese Please maintain range between 18.5 to 25 -For a Healthy Life")
// }
// --------------------------------------------------------------------------------------------------------------
// 6.EB Bill Calculator using Ladder if else
// let units=460
// if(units<=100){
//     bill =units*1.5
//     console.log("Units:"+units)
//     console.log("Bill:"+bill)
// }else if(units<=200){
//     bill=units*2
//     console.log("Units:"+units)
//     console.log("Bills:"+bill)
// }else if(units<=300){
//     bill=units*3
//     console.log("Units:"+units)
//     console.log("Bills:"+bill)
// }else{
//     bill=units*5
//     console.log("Units:"+units)
//     console.log("Bills:"+bill)
// }
// --------------------------------------------------------------------------------------------------------------
// 7.Check Character Uppercase & Vowels using Nested if else 
// let char="a"
// if(char>="A" && char<="Z"){
//     if(char =="A" || char == "E" || char == "I" || char == "O" || char == "U"){
//         console.log("It is Uppercase Vowel")
//     }else{
//         console.log("It is Uppercase Consonant")
//     }
// }
// else{
//     console.log("It is an Lowercase Vowel/Consonant")
// }
// ----------------------------------------------------------------------------------------------------------------------
// 8.Check Voting And Driving Eligibility using nested if else
// let age=12
// if(age>=18){
//     if(age>=21){
//         console.log("You Are Eligible for both voting and driving criteria")
//     }
//     else{
//         console.log("You Are Eligible for voting only")
//     }
// }
// else{
//     console.log("You Are not eligible for both")
// }
// ------------------------------------------------------------------------------------------------------------------------
// 9.Switch Case -to find family members birthday date
// let choice = 19

// switch (choice) {
//     case 15:
//         console.log("It is Pranitha and Prithvi Birthday")
//         break

//     case 19:
//         console.log("It is Vengadesan Birthday")
//         break

//     case 12:
//         console.log("It is Ishwarya Birthday")
//         break

//     default:
//         console.log("It is no one's birthday")
//         break
// }
// ----------------------------------------------------------------------------------------------------------------
// 10.check balance using nested if else statement
// let amount=10500
// let balance=10000
// if(balance>=amount){
//     if(amount%10==0){
//         console.log("Withdraw Successful")
//     }else{
//         console.log("Enter a Valid amount")
//     }
// }
// else{
//     console.log("Insufficient Balance")
// }
// ---------------------------------------------------------------------------------------------------------------------------






   
 



  