// Exploring Conditional Statements and Loops

// Objective: The aim of this assignment is to familiarize students with conditional statements and loops in JavaScript and enhance their problem-solving skills using these control structures.

// Problem Statement: You are tasked with creating a JavaScript program that simulates a simple online shopping experience. The program should allow users to browse products, add them to a cart, and calculate the total cost of their purchase.


// Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.

console.log('Task 1:');

let loggedIn = true;

function loginStatus (loggedIn) {
    if (loggedIn) {
        return ("User is logged in.");
    }

    else {
        return ("User is not logged in.");
    }
}

console.log(loginStatus(loggedIn))


console.log('*'.repeat(35));

// Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.

console.log('Task 2:');

let availableProducts = ["Apple", "Orange", "Pear", "Banana", "Nectarine", "Strawberry"]

function listAvailableProducts (availableProducts) {
    let result = 'Available Products:\n';

    for (const productIndex in availableProducts) {
        result += `${(availableProducts[productIndex])}\n`;
    }
    return result
};

console.log (listAvailableProducts(availableProducts));

console.log('-'.repeat(35));

let cart = []

function addCart(product) {
    if (availableProducts.includes(product)) {
        cart.push(product);
        console.log(`${product} has been added to your cart.`);
    } else {
        console.log(`${product} is not available.`);
    }
};

addCart("Strawberry");
addCart("Apple");
addCart("Mango");
addCart("Nectarine")

console.log(`Cart Contents: ${cart}`);

console.log('*'.repeat(35));

// Task 3: Calculate the total cost of the items in the cart and display it to the user.

console.log('Task 3:');

let productPrices = {
    "Apple" : 2,
    "Orange" : 3,
    "Pear" : 3.5,
    "Banana" : 1.5,
    "Nectarine" : 5,
    "Strawberry" : 2.5
}

function totalCost (cart) {
    total = 0;
    for (const item of cart) {
        if (productPrices.hasOwnProperty(item)) {
            total += productPrices[item];
            console.log (`${item} costing \$${productPrices[item]} was added to cart total.`)
            console.log(`Current cart total: \$${total}`)
        }
        else {
            console.log(`${item} is not available in the product list.`);
            }
        }
        return total
    }

console.log(`Grand Cart Total: \$${totalCost(cart)}`);

console.log('*'.repeat(35));



// Exploring Functions in JavaScript

// Objective: The aim of this assignment is to deepen students' understanding of functions in JavaScript and their various applications in solving programming problems.

// Problem Statement: Your task is to develop a JavaScript program that simulates a simple banking system. The program should include functions to perform basic banking operations such as deposit, withdrawal, and balance inquiry.


// Task 1: Create a function to handle deposits into a bank account.

// Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.

// Task 3: Develop a function to check the current balance of the account.

class BankAccount {
    constructor() {
        this.balance = 0;
    }

    deposit(depositAmount) {
        if (typeof depositAmount === 'number' && depositAmount > 0) {
            this.balance += depositAmount;
            console.log(`\$${depositAmount} was successfully deposited into your account.`);
            console.log(`Current account balance: \$${this.balance}`);
        } else {
            console.log(`Invalid deposit amount. Enter a positive number.`);
        }
        return this.balance;
    }

    withdraw(withdrawalAmount) {
        if (typeof withdrawalAmount === 'number' && withdrawalAmount > 0) {
            if (this.balance >= withdrawalAmount) {
                this.balance -= withdrawalAmount;
                console.log(`\$${withdrawalAmount} was successfully withdrawn from your account.`);
            console.log(`Current account balance: \$${this.balance}`);
            }
            else {
                console.log (`Sorry, insufficient funds in your account to withdraw \$${withdrawalAmount}`)
                console.log(`Current account balance: \$${this.balance}`)
            }
        }
        else {
            console.log(`Invalid deposit amount. Enter a positive number.`)
        }
        return this.balance
    }

    checkBalance() {
        console.log (`Account balance: \$${this.balance}`)
        return this.balance
    }
}

const myAccount = new BankAccount();

// Task 1:
console.log('Task 1:');

myAccount.deposit(500);
myAccount.deposit(400);
myAccount.deposit(350);

console.log('*'.repeat(35));

// Task 2:
console.log('Task 2:');

myAccount.withdraw(500);
myAccount.withdraw(400);
myAccount.withdraw(350);
myAccount.withdraw(100);

console.log('-'.repeat(35));

myAccount.deposit(600);
myAccount.deposit(400);

console.log('*'.repeat(35));

// Task 3:

console.log('Task 3:');

myAccount.checkBalance();

console.log('*'.repeat(35));
