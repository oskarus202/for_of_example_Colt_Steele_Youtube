//example of for of loop - not supported in IE browser

const purchases = [19.99, 9.50, 4.25, 28.75, 86.20, 1.99, 104.50, 2.85];

let total = 0;
// purchase is what we call an element - it can be named practically anything - apart from purchases which is the name of array
for (let purchase of purchases) {
    total += purchase;
    console.log(purchase);

}

console.log(`Total is $${total}`);


//

let text = "fsdferegdfsdfsdfwfsdfsdf";

for (let letter of text) {
    console.log(letter);
}