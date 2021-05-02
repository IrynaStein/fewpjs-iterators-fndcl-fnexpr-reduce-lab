const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// * Create a new variable called `totalBatteries`, which holds the sum of all of
//   the battery amounts in the `batteryBatches` array. (Note that the
//   `batteryBatches` variable has been provided for you in `index.js`.) Naturally,
//   you should use `reduce()` for this!

const totalBatteries = batteryBatches.reduce((acc, battery) => acc + battery, 0) //or we can leave the 0 initator out as well