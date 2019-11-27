/*
Objective

Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

Task

Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

Input Format

Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.

Constraints

Output Format

The function must return the value of .

Sample Input 0

4
Sample Output 0

24
*/

function factorial(n) {
    if (n>0 && n<11) {
        let result = 1;
        for (let i=n; i > 1; i--) {
            result*=i;
        }
        console.log(result);
    }
}

//
function factorial_recursive(n) {
    return (n!=1) ? n * factorial_recursive(n-1) : 1;
}

factorial(5);
console.log(`factorial recursive: ${factorial_recursive(5)}`);