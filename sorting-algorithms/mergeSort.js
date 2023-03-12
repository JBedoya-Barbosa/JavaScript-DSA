function merge(arr1, arr2) {
    let arr = []
    let i = 0, j = 0

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) arr.push(arr1[i++])
        else arr.push(arr2[j++])
    }

    while(i < arr1.length) arr.push(arr1[i++])
    while(j < arr2.length) arr.push(arr2[j++])

    return arr
}

// Time complexity: O(n*log(n))
// Space complexity: O(n)
function mergeSort(arr) {
    if(arr.length <= 1) return arr

    const middle = Math.floor(arr.length / 2)
    const leftArr = mergeSort(arr.slice(0, middle))
    const rightArr = mergeSort(arr.slice(middle, arr.length))

    return merge(leftArr, rightArr)
}