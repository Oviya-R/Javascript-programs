//muliple of 3 and 5 and both
let itr;
for(itr=1; itr<=100; itr++){
    if(itr%3==0 && itr%5==0){
        console.log("FizzBuzz");
    }
    else if(itr%3==0){
        console.log("Fizz");
    }
    else if(itr%5==0){
        console.log("Buzz");
    }
}


//Largest Number 
let arr=[2,5,6,7,8,3,4];
function maximum(arr){
   arr.sort();
    return arr[arr.length-1]
}
console.log(maximum(arr));

// //Factorial of the Number
function factorial(num){
   let fact = 1;
    for(itr=1; itr<=num; itr++){
       fact = fact * itr;
    }
    return fact;
   
}
console.log(factorial(5));


// //celsius to Fahrenheit
function value(num){
    let fahrenheit = (num*9/5)+32;
    return fahrenheit;
}
console.log(value(5));

// //pallindrome are not
let str = "madam";
let itr2 = str.length-1;
function pallindrome(str){
    for(let itr1=0; itr1<str.length/2; itr1++){
        if(str[itr1] != str[itr2]){
            return "It is not a Pallindrome";
        }
        itr2--;
    }
    return "It is Pallindrome";
}
console.log(pallindrome(str));

// //longest word of the string
let str = "we are watching television";
let words = str.split(" ");
let longest = " ";
for(let itr=0; itr<words.length; itr++){
    if(words[itr].length > longest.length){
        longest = words[itr];
    }
}
console.log(longest);

// //occurance of a string
function counting(str,char){
let count = 0;
for(let itr=0; itr<str.length; itr++){
    if(str[itr] == char){
        count++
    }
}
return count;
}

console.log(counting("Apple",'p'));
