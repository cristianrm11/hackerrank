/* Divisible Sum Pairs
You are given an array of  integers, , and a positive integer, . Find and print the number of  pairs where  and  +  is divisible by .

For example,  and . Our three pairs meeting the criteria are  and .

Function Description

Complete the divisibleSumPairs function in the editor below. It should return the integer count of pairs meeting the criteria.

divisibleSumPairs has the following parameter(s):

n: the integer length of array 
ar: an array of integers
k: the integer to divide the pair sum by
Input Format

The first line contains  space-separated integers,  and .
The second line contains  space-separated integers describing the values of .

Constraints

Output Format

Print the number of  pairs where  and  +  is evenly divisible by .

Sample Input

6 3
1 3 2 6 1 2
Sample Output

 5
*/

function divisibleSumPairs(n, k, ar) {
    let pairResult = [];
    let i = 0;
    let j = 0;
    do {
        if (j ===  (n-1)) {
            i++;
            j=i;
        }
        j++;
        //console.log(`(${i}, ${j}) - I=${ar[i]} | J=${ar[j]}`);
        if ((i < j) && ((parseInt(ar[i])+parseInt(ar[j])) % k === 0)) {
            //console.log(`if (${ar[i]} < ${ar[j]}) AND ${ar[i]} + ${ar[j]} % ${k} === 0`);
            //console.log(`if ${i} < ${j}) AND ${ar[i]} + ${ar[j]} % ${k} === 0`);
            pairResult.push([ar[j], ar[i]]);
        }
    } while(i !== (n-1));
    console.log(`Final pair: ${pairResult}`);
    console.log(pairResult.length);
    return pairResult.length;
}

//divisibleSumPairs(6, 3, [1,3,2,6,1,2]);
divisibleSumPairs(5, 2, [5,9,10,7,4]);