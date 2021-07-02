// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...
iceCreamFlavours.push('root beer');
console.log(iceCreamFlavours);

// Someone wants the first flavor of ice cream
console.log(iceCreamFlavours[0]);


// Someone wants the last ice cream flavour 
let flavours = iceCreamFlavours.length - 1;
console.log(flavours);
console.log(iceCreamFlavours[flavours]);