// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."


// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."


// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.


// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).

function squaredNumber(){
    var num = 6;
       var squared = num * num;
      return "The result of squaring the number " + num + " is " + squared;
   console.log("The result of squaring the number " + num + " is " + squared)
   }    
   
       
   
   
    
   function HalfNumber() {
   var num = 10
   var half = num / 2;
   console.log("Half of " + num + " is " + half);
    return "Half of " + num + " is " + half;
              }
  
   
     
     function percentOF(){
           var num1 = 20;
       var num2 = 5;
       var percent = (num1/num2) * 100;
       return num1 + " is " + percent + "%" + " of " + num2;
       console.log(num1 + " is " + percent + "%" + " of " + num2);
   }
       

   
    function areaOfCircle(){  
   var radius = 4
    var area = 3.14 * radius;
      
   return "The area for a circle with radius " + radius + " is " + area;
             console.log("The area for a circle with radius " + radius + " is " + area);
         }
           
 
   
   
   
     function runAll(){
        var num = 8;
       var half    = (num/2);
       var squared = num * num;
       var area    = 3.14 * num;
       
        
       return half + ", " + squared + ", " + area;
       
           }
  
        
       
   
   
   //EXERCISE 1: The Fortune Teller
   //Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."
   
   //EXERCISE 2: The Age Calculator
   //Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.
   
   //EXERCISE 3: The Lifetime Supply Calculator
   //Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".
   
   //EXERCISE 4: The Geometrizer
   //Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
   
   //EXERCISE 5: The Temperature Converter
   //It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
   
     function FortuneTeller(){
           var Myarray1 = ["Engineer","Counseling","Mathematician","Scientist"];
   var jobTitle = Myarray1[Math.floor(Math.random()*Myarray1.length)];
   
   var Myarray2 = ["Toronto","Vancouver","Calcary","Winnipeg"];
   var geoLocation  = Myarray2[Math.floor(Math.random()*Myarray2.length)];
   
   var Myarray3 = ["$100,000","$80,000","$90,000","$85,000"];
   var annualSalary = Myarray3[Math.floor(Math.random()*Myarray3.length)];
   
   var Myarray4 = ["CanadianTire","Delloite","Walmart","UofT"];
   var companyName = Myarray4[Math.floor(Math.random()*Myarray4.length)];
            
            
  return "You will be a " + jobTitle + " in " + geoLocation + " working for " + companyName + " earning " + annualSalary;
               console.log("You will be a " + jobTitle + " in " + geoLocation + " working for " + companyName + " earning " + annualSalary);
           }
           

           
   
   function AgeCaluclator(){
         var CurrentYear = 2020;
       var BirthYear = 1992;
       var Age = CurrentYear - BirthYear;
       
       return "They are " + Age + " years old.";
               console.log("They are " + Age + " years old.");
           }
           

           
   
   
   
     function LifeTimeSupply(){
           var age = 30;
   var maxAge = 90;
   var numPerDay = 2;
   var totalNeeded = (numPerDay * 365) * (maxAge - age);
    return "You will need " + totalNeeded + " of coffee capsules to last you until the ripe old age of " + maxAge;
               console.log("You will need " + totalNeeded + " of coffee capsules to last you until the ripe old age of " + maxAge);
           }

   
   
   
     function Geometrizer(){
         var radius = 3;
   var circle = 3.14 * 2*radius;
   var area = 3.14 * radius*radius;
   return "The circumference is  " + circle + " and the area is " + area;
               console.log("The circumference is " + circle + " and the area is " + area);
   
           }
   
   
   function celciusToFe(){
         var celsius = 30;
   var celsiusInF = (celsius*1.8) + 32;
   return celsius + "°C  is " + celsiusInF + "°F ";
               console.log(celsius + "°C  is " + celsiusInF + "°F ");
           }


     
     function fahtocelsius(){
           var fahrenheit = 86;
   var fahrenheitInC = ((fahrenheit - 32)*5)/9;
   return fahrenheit + "°F is " + fahrenheitInC + "°C";
           }

    

 