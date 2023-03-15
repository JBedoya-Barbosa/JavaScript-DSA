function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr) {
    let maxDigits = 0

    for(let i=0 ; i<arr.length ; i++)
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))

    return maxDigits
}

// Time complexity: O(n*m)
// Space complexity: O(n)
// where n is the length of the array and m the maximum number of digits
// present in a number.
function radixSort(arr) {
    const n = mostDigits(arr)
    const matrix = Array.from({ length: 10 }, () => [])
    
    for(let i=0 ; i<n ; i++) {
        for(let j=0 ; j<arr.length ; j++) matrix[getDigit(arr[j], i)].push(arr[j])

        let arrIdx = 0
        for(let j=0 ; j<10 ; j++)
            while(matrix[j].length > 0) arr[arrIdx++] = matrix[j].shift()
    }
}