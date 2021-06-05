/*
    CIT 281 Project 2
    Name: Devin DeBacker
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

//Returns a single, random, lowercase letter
const getRandomLetter = function() {
    return alphabet[getRandomInteger(0,26)];
}

// Return a random length string
const getRandomString = function(minLength, maxLength) {
    for (let i = 0; i < getRandomInteger(minLength,maxLength+1); i++) {
        result += getRandomLetter();
    }
    return result
}

//Returns a string in ascending order
const getSortedString = function(string) {
    return string.split("").sort().join("")
}