// Time complexity: O(n)
// Space complexity: O(1)
function linearSearch(arr, value) {
    let iterations = 0

    for(let i=0 ; i<arr.length ; i++) {
        iterations++
        if(arr[i] === value) return [i, iterations]
    }

    return [-1, iterations]
}