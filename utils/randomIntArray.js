// Module for testing purposes

// Generate an 'n' lenght array of random numbers in a certain range
moudule.exports = function randomIntArray(min, max, length) {
    const arr = []

    for(let i=0 ; i<length ; i++) {
        const randNumber = Math.floor(Math.random() * (max - min)) + min
        arr.push(randNumber)
    }

    return arr
}