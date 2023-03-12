// Time complexity: O(n^2)
// Space complexity: O(1)
function bubbleSort(arr) {
    if(arr.length <= 1) return [arr, 0]

    let iterations = 0

    for(let i=0 ; i<arr.length ; i++) {
        let swapped = false
        for(let j=0 ; j<arr.length - i - 1 ; j++) {
            iterations++
            if(arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }
        if(!swapped) break
    }

    return [arr, iterations]
}