/* 
  - Visualization with playing cards (scroll down):
      https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - Array / bar visualization:
      https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
  - Stable sort, efficient for small data sets or mostly sorted data sets.
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  - this sort splits the array into two portions (conceptually, not literally).
  - the left portion will become sorted, the right portion
      (that hasn't been iterated over yet) is unsorted.
  // can shift OR swap target element until it reaches desired position
  // shifting steps:
  1. consider the first item as sorted
  2. move to the next item
  3. store current item in a temp var (to make this position available to shift items)
  4. if item to the left of current is greater than current item, shift the
      left item to the right.
  5. repeat step 4 as many times as needed
  6. insert current item
  7. move to the next item and repeat
  // swap steps:
  1. consider the first item as sorted
  2. move to the next item
  4. if item to left of current item is less than current, swap
  5. repeat step 4 until item to left is less than current item
  6. move to next item and repeat
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */

/* insertion Sort
1. Create a for loop, set i = the second array index, loop until the last index is reached
2. Check to see if the current index is greater than the previous index
3. if it is, swap those numbers and then create a for loop, set j = i -1, loop until j is pointing to the first index
4. for each index before j, check to see if the value of index[j] is less than index [j-1]
5. if it is, swap those numbers and continue
7. if not, break from j loop and continue
6. return sorted array
*/
function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
            for (let j = i - 1; j > 0; j--) {
                if (nums[j] < nums[j - 1]) {
                    [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
                } else {
                    break;
                }
            }
        }
    }
    return nums
}

function insertionSortVisual(nums) {
    for (let i = 1; i < nums.length; i++) {
        console.log(`I loop`)
        console.log(`Is ${nums[i]} < ${nums[i-1]} ?`)
        if (nums[i] < nums[i - 1]) {
            [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
            console.log(`Yes, create second for loop to itterate backwards from i`)
            for (let j = i - 1; j > 0; j--) {
                console.log(`J loop`)
                console.log(`Is ${nums[j]} < ${nums[j-1]} ?`)
                if (nums[j] < nums[j - 1]) {
                    console.log(`Yes, swap ${nums[j]} with ${nums[j-1]}`);
                    [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
                } else {
                    console.log(`No. Sorting done`);
                    break;
                }
            }
        } else {
            console.log(`No, move to next array index`)
        }
    }
    return nums
}

console.log(insertionSort(numsOrdered))
    // console.log(insertionSortVisual(numsRandomOrder))
    // console.log(insertionSort(numsReversed))