// This file defines various functions for easy use in other files.

// This function will get a random element of an array.
function randFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

module.exports = { randFromArray }
