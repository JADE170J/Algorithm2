function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

const array = [5, 2, 4, 6, 1, 3];
console.log("Original array:", array);
// const sortedArray = insertionSort(array);
// console.log("Sorted array:", sortedArray);
