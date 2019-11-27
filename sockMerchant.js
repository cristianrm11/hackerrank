/**
 * John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers describing the colors  of the socks in the pile.

Constraints

 where 
Output Format

Return the total number of matching pairs of socks that John can sell.

Sample Input

9
10 20 20 10 10 30 50 10 20

Sample Output
3
*/

function sockMerchant(n, ar) {
    let color;
    let findColor;
    let i = 0;
    let count = 0;
    while (ar.length > i) {
        color = ar[i];
        findColor = ar.filter(c => c === color);
        count += parseInt(findColor.length / 2);
        ar = ar.filter(e => findColor.indexOf(e) < 0);
        i++;
    }
    console.log(count);
}

sockMerchant(9, [10,20,10,20]);
sockMerchant(9, [10,20,20,10,10,30,50,10,20]);
sockMerchant(10, [1,1,3,1,2,1,3,3,3,3]);
sockMerchant(15, [6,5,2,3,5,2,2,1,1,5,1,3,3,3,5]);
