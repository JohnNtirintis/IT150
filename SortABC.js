//Exercise: The user gives 3 numbers, stored in the variables a,b,c respectively. Write a Javascript program that changes their values,
//from the smallest to the bigger (i.e., a<=b<=c)
let a = prompt("Assign a value for variable a");
let b = prompt("Assign a value for variable b");
let c = prompt("Assign a value for variable c");
let temp = 0;
//temporary variable to store the data that is going to be replaced

if(a > b){
    temp = b;
    b = a;
    a = temp;
    temp = 0;
}
if( b > c){
    temp = c;
    c = b;
    b = temp;
    temp = 0;
}
if(a > b){
    temp = b;
    b = a;
    a = temp;
    temp = 0;
}

alert("The declining order is " + c + " " + b + " " + a); 
