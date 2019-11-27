/*
Objective

In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

Task

Complete the getSecondLargest function in the editor below. It has one parameter: an array, , of  numbers. The function must find and return the second largest number in .

Input Format

Locked stub code in the editor reads the following input from stdin and passes it to the function:
The first line contains an integer, , denoting the size of the  array.
The second line contains  space-separated numbers describing the elements in .

Constraints

, where  is the number at index .
The numbers in  are not distinct.
Output Format

Return the value of the second largest number in the  array.

Sample Input 0

5
2 3 6 6 5
Sample Output 0

5
*/

// https://www.freecodecamp.org/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/

function getSecondLargest(nums) {
    // Complete the function
    let max = Math.max.apply(null, nums);
    let secondMax = Math.max.apply(null, nums.filter(x=>x!==max));
    console.log(secondMax);
    return secondMax;
}

getSecondLargest([2,3,6,6,5]);