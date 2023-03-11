function linearSearch(arr, value) {
    for(let i=0 ; i<arr.length ; i++) {
        if(arr[i] === value) return i
    }
    return -1
}

console.log(linearSearch([1, 4, 5, 8], 10))