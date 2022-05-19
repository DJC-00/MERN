/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
  Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const setA1 = [3,2,1];
const setB1 = [1 , 2, 3];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const setA2 = [1, 2, 3];
const setB2 = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const setA3 = [4, 1, 2, 3, 4];
const setB3 = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

const setA4 = [];
const setB4 = [];
const expected4 = [];

const setA5 = [];
const setB5 = [1, 2, 3];
const expected5 = [1, 2, 3];

/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * @see https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(?).
 * - Space: O(?).
 * @param  {Array<number>} numsA
 * @param  {Array<number>} numsB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */
//  const setA3 = [4, 1, 2, 3, 4];
//  const setB3 = [1, 2, 3, 5, 5];
function symmetricDifferences(numsA, numsB) {
    let result = []
    let numsA_Indexes = []
    let numsB_Indexes = []
    numsA.map((element, e1_Index) => {
        let matchFlag = false;

        numsB.map((element_2, e2_Index) => {
            
            // console.log(element, element_2, "test")
            if (element == element_2){
                // console.log(element, element_2, "match")
                matchFlag = true;
                // numsB.splice(e2_Index)
                numsB_Indexes.push(e2_Index)
                result.push(element_2)
            }
        })

        if (matchFlag == true){
            numsA_Indexes.push(e1_Index)
        }
        // if (matchFlag == true){
        //     console.log("True ",e1_Index)
        //     numsA.splice(e1_Index)
        // }

        // console.log(numsA, numsB)
        // console.log(element, "asd")
    })

    for (let i = numsA_Indexes.length - 1; i >= 0; i--){
        console.log("!@!")
        console.log(numsA_Indexes[i])
        console.log(numsA.splice(numsA_Indexes[i],1))
        console.log(numsA, "Final")
    }
    for (let i = numsB_Indexes.length - 1; i >= 0 ; i--){
        console.log("#$#")
        console.log(numsB_Indexes[i])
        console.log(numsB.splice(numsB_Indexes[i],1))
        console.log(numsB, "Final")
    }
    // console.log(numsA_Indexes,numsB_Indexes)
    // console.log("numsA,numsB")
    // console.log(numsA,numsB)
    return result = [...new Set([...numsA,...numsB])]
}

// function symmetricDifferences(numsA, numsB) {
//     let result = []
//     let numsA_Indexes = []
//     let numsB_Indexes = []
//     numsA.map((element, e1_Index) => {
//         let matchFlag = false;

//         numsB.map((element_2, e2_Index) => {
            
//             if (element == element_2){
//                 matchFlag = true;
//                 numsB_Indexes.push(e2_Index)
//                 result.push(element_2)
//             }
//         })

//         if (matchFlag == true){
//             numsA_Indexes.push(e1_Index)
//         }
//     })

//     for (let i = numsA_Indexes.length - 1; i >= 0; i--){
//         numsA.splice(numsA_Indexes[i],1)
//     }
//     for (let i = numsB_Indexes.length - 1; i >= 0 ; i--){
//         numsB.splice(numsB_Indexes[i],1)
//     }
//     return result = [...new Set([...numsA,...numsB])]
// }

console.log(symmetricDifferences(setA1, setB1));
// console.log(symmetricDifferences(setA2, setB2));
// console.log(symmetricDifferences(setA3, setB3));
// console.log(symmetricDifferences(setA4, setB4));
// console.log(symmetricDifferences(setA5, setB5));

/**********************************/