/* Exercise: In the Gregorian calendar, each leap year has 366 days instead of 365, 
by extending February to 29 days rather than the common 28.
These extra days occur in each year that is an integer multiple of 4 (except for years evenly divisible by 100, but not by 400).
Write a Javascript program to find whether a year given by the user*/

let year = prompt("Type the year you want to check if its a leap year or not.");

if(year % 4 == 0 && year % 100 != 0 ) alert("The year " + year + " is a leap year.");
else if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0) alert("The year " + year + " is a leap year.");
else if(year % 4 == 0 & year % 100 == 0 && year % 400 != 1) alert(year + " is not a leap year.");
else alert(year + " is not a leap year");