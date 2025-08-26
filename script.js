
// Part 1: Variables & Conditionals

let age = 20;
let name = "James";

if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is a minor.");
}

// Part 2: Custom Functions

function greetUser(username) {
    return "Hello, " + username + "!";
}

function squareNumber(num) {
    return num * num;
}

console.log(greetUser("James"));
console.log("Square of 4 is:", squareNumber(4));

// Part 3: Loops

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration:", i);
}

// Example 2: While loop
let counter = 1;
while (counter <= 3) {
    console.log("While loop count:", counter);
    counter++;
}

// Part 4: DOM Interactions

// 1) Change text when button is clicked
document.getElementById("change-text-btn").addEventListener("click", function () {
    document.getElementById("main-title").innerText = "Title Changed with JS!";
});

// 2) Add new list item dynamically
document.getElementById("add-item-btn").addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = "New Item " + (document.querySelectorAll("#my-list li").length + 1);
    document.getElementById("my-list").appendChild(li);
});

// 3) Toggle background color
document.getElementById("toggle-color-btn").addEventListener("click", function () {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});
