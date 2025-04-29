// DOM Interaction

console.log("-------------DOM Interaction--------------")

let title = document.getElementById("name");
console.log(title.textContent);

let message1 = document.getElementsByTagName("p")[0];
console.log(message1.textContent);

let message2 = document.getElementsByTagName("p")[1];
console.log(message2.textContent);

document.querySelector("button").addEventListener("click", function() {alert("Welcome to Devsloop!")});



// Functions for Array Manipulation

function array(){

    console.log("-------------Arrays Manipulation Functions--------------")

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.push(6);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

numbers.shift();
console.log(numbers);

console.log(numbers.length);

console.log(numbers.includes(3));

console.log(numbers.indexOf(3));

let temp = numbers.slice(1,4);
console.log(temp);

numbers.splice(1,4,6,7,8,9,10);
console.log(numbers);

numbers.forEach((number, index) => {
    console.log(index + ":" + number)
});

const temp2 = numbers.map(number => number + 2);
console.log(temp2);

const temp3 = numbers.filter(number => number % 5 === 0);
console.log(temp3);

console.log("Now original array is: " + numbers);

const temp4 = numbers.reduce((acc, current) => acc + current, 0);
console.log(temp4);

}



// Functions for Objects Manipulation

const object = function() {

    console.log("-------------Objects Manipluation Functions--------------")
    
const players = {name: "Tayyab", department: "SE", city:"Gujranwala"};

console.log(Object.keys(players));

console.log(Object.values(players));

console.log(Object.entries(players));

delete players.department;
console.log(Object.keys(players));

console.log("name" in players);

}



// Function Calls
console.log("-------------Function Calls--------------")
array();
object();



console.log("-------------Arrow Function--------------")

const func = () => {
    var sum = 0;
    if(sum === 0){
        var summ = ++sum;
        let minus = 0;
    }
    console.log(summ);
    alert("Can't access 'minus' because 'let' has block scope, so it is giving error on console");
    console.log(minus);
}

func();