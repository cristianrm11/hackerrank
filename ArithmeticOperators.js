/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    if (length > 0 && length < 1001 && width > 0 && width < 1001) {
        area = length.toFixed(3) * width.toFixed(3);
    }
    console.log(area);
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    if (length > 0 && length < 1001 && width > 0 && width < 1001) {
        perimeter = ((2 * length.toFixed(3)) + (2 * width.toFixed(3)));
    }
    console.log(perimeter);
    return perimeter;
}

// getArea(3, 4.5);
// getPerimeter(3, 4.5);

getArea(311.123, 499.997);
getPerimeter(311.123, 499.997);