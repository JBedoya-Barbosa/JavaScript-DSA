// Time complexity: O(n^2)
// Space complexity: O(1)
function selectionSort(arr) {
    if(arr.length <= 1) return [arr, 0]

    let iterations = 0

    for(let i=0 ; i<arr.length ; i++) {
        let minIdx = i

        for(let j=i+1 ; j<arr.length ; j++) {
            iterations++
            if(arr[j] < arr[minIdx]) minIdx = j
        }

        if(i !== minIdx) {
            temp = arr[i]
            arr[i] = arr[minIdx]
            arr[minIdx] = temp
        }
    }

    return [arr, iterations]
}