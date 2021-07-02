const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let finalOutput = "";
// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

// WHILE LOOP
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}


// FOR LOOP
for(let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}


// USE ANY LOOP TO PRINT BACKWARDS
let revArray = ingredients.reverse();
for(let i = 0; i < revArray.length; i++) {
  console.log(revArray[i]);
}