// Time complexity: O(n^2)
// Space complexity: O(1)
function insertionSort(arr) {
    if(arr.length <= 1) return [arr, 0]

    let iterations = 0

    for(let i=1 ; i<arr.length ; i++) {
        let currVal = arr[i]
        let j = i-1
        while(j >= 0 && arr[j] > currVal) {
            iterations++
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = currVal
    }

    return [arr, iterations]
}