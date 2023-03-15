const swap = require('../utils/swap.js')

function pivot(arr, start, end) {
    let swapIdx = start

    for(let i=start+1 ; i<end+1 ; i++)
        if(arr[i] < arr[start]) swap(arr, ++swapIdx, i)

    swap(arr, start, swapIdx)
    return swapIdx
}

// Time complexity: O(n*log(n))
// Space complexity: O(log(n))
function quickSort(arr, left=0, right=arr.length) {
    if(left < right) {
        let pivotIdx = pivot(arr, left, right)
        quickSort(arr, left, pivotIdx-1)
        quickSort(arr, pivotIdx+1, right)
    }
}