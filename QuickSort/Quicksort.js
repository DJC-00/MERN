// function quickSort(arr, i = 0, j = arr.length - 1) {

//     if (arr.length <= 1) {
//         console.log("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_")
//         console.log("single number")
//         console.log("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_")
//         return arr
//     }

//     let pivotIndex = Math.floor(Math.random() * j + 1);
//     console.log(`Index I: ${i}, Value: ${arr[i]} \n`)
//     console.log(`Index J: ${j}, Value: ${arr[j]} \n`)
//     console.log(`Index P: ${pivotIndex}, Value: ${arr[pivotIndex]} \n`)
//     console.log(arr)

//     if (i == j) {
//         console.log(`i and J are equal`)
//         return arr
//     }

//     // if (i == j) {
//     //     return
//     // }
//     // return arr

//     while (i != j) {
//         if (arr[i] >= arr[pivotIndex]) {
//             if (arr[j] <= arr[pivotIndex]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//                 console.log("swap")
//             } else if (j > pivotIndex - 1) {
//                 j--
//                 console.log("dec J")
//             }
//         } else if (i < pivotIndex - 1) {

//             i++
//             console.log("inc I")
//         }

//         console.log(`Index I: ${i}, Value: ${arr[i]} \n`)
//         console.log(`Index J: ${j}, Value: ${arr[j]} \n`)
//         console.log(`Index P: ${pivotIndex}, Value: ${arr[pivotIndex]} \n`)
//         console.log(arr)
//     }
//     console.log("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_")
//     console.log(i, j)
//     console.log("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_")
//     console.log("quicksort left")
//     console.log(j - 1)
//     quickSort(arr, 0, pivotIndex - 1)
//     console.log("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_")
//     console.log("quicksort right")
//     quickSort(arr, pivotIndex + 1, arr.length - 1)

//     return arr;

// }


// function quickSort(arr, i = 0, j = arr.length - 1) {

//     if (arr.length <= 1) {
//         return arr
//     }

//     let pivotIndex = Math.floor(Math.random() * j + 1);

//     if (i == j) {
//         console.log(`i and J are equal`)
//         return
//     }

//     // if (i == j) {
//     //     return
//     // }
//     // return arr

//     while (i < p && j > p) {
//         if (arr[i] >= arr[pivotIndex]) {
//             if (arr[j] <= arr[pivotIndex]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//                 console.log("swap")
//             } else if (j > pivotIndex) {
//                 j--
//                 console.log("dec J")
//             }
//         } else if (i < pivotIndex) {

//             i++
//             console.log("inc I")
//         }

//         console.log(`Index I: ${i}, Value: ${arr[i]} \n`)
//         console.log(`Index J: ${j}, Value: ${arr[j]} \n`)
//         console.log(`Index P: ${pivotIndex}, Value: ${arr[pivotIndex]} \n`)
//         console.log(arr)
//     }
//     console.log("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_")
//     console.log(i, j)
//     console.log("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_")
//     console.log("quicksort left")
//     console.log(j - 1)
//     quickSort(arr, 0, pivotIndex - 1)
//     console.log("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_")
//     console.log("quicksort right")
//     quickSort(arr, pivotIndex + 1, arr.length - 1)

//     return arr;

// }


// function quickSortThree(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     const pivot = arr[Math.floor(Math.random() * arr.length)];

//     let left = [];
//     let right = [];
//     let equal = [];

//     for (let val of arr) {
//         if (val < pivot) {
//             left.push(val);
//         } else if (val > pivot) {
//             right.push(val);
//         } else {
//             equal.push(val);
//         }
//     }
//     return [
//         ...quickSortThree(left),
//         ...equal,
//         ...quickSortThree(right)
//     ];
// }
let testArr = [5, 7, 3, 12, 42, 32, 11, 66, 54, 43]
console.log(testArr);

function qsTest(arr, low = 0, high = arr.length - 1) {
    if (high - low <= 1) {
        return arr
    }
    const pivot = Math.floor(Math.random() * high) + (low - 1);
    console.log(`pivot: arr[${pivot}] = ${arr[pivot]}`);
    console.log(`low: arr[${low}] = ${arr[low]} high: arr[${high}] = ${arr[high]}`);

    while (low != high) {
        if (low == high) {
            break;
        } else if (arr[low] < arr[pivot] && low < pivot) {
            console.log("inc low")
            low++
        } else if (arr[high] > arr[pivot] && high > pivot) {
            console.log("dec high")
            high--
        } else {
            console.log("swap");
            // console.log(arr);
            [arr[low], arr[high]] = [arr[high], arr[low]]
            console.log(arr);
        }
        console.log(`pivot: arr[${pivot}] = ${arr[pivot]}`)
        console.log(`low: arr[${low}] = ${arr[low]} high: arr[${high}] = ${arr[high]}`)
    }
    console.log("<><><> left <><><>")
    qsTest(arr, 0, high - 1)
    console.log("<><><> right <><><>")
    qsTest(arr, high + 1)

    return arr
}

console.log(qsTest(testArr))