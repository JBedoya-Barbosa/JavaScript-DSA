// This algorithm just apply for sorted array of numbers
// Time complexity: O(log(n))
// Space complexity: O(1)
function binarySearch(arr, value) {
    let leftPtr = 0, rightPtr = arr.length - 1
    let iterations = 0
    
    while(leftPtr <= rightPtr) {
        iterations++

        const middleIdx = Math.floor((leftPtr + rightPtr) / 2)

        if(value > arr[middleIdx]) leftPtr = middleIdx + 1
        else if(value < arr[middleIdx]) rightPtr = middleIdx - 1
        else return [middleIdx, iterations]
    }

    return [-1, iterations]
}