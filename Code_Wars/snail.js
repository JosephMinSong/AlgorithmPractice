snail = function (array) {
    // enjoy
    const ans = [];

    let top = 0;
    let bottom = array.length - 1;
    let left = 0;
    let right = array[0].length - 1;

    while (top <= bottom) {

        // top row
        for (let i = left; i <= right; i++) {
            ans.push(array[top][i])
        }

        // right side
        for (let i = top + 1; i < bottom; i++) {
            ans.push(array[i][right])
        }

        // bottom row only if top and bottom aren't the same
        if (top != bottom) {
            for (let i = right; i >= left; i--) {
                ans.push(array[bottom][i])
            }
        }

        // left side only if left and right aren't the same
        if (left != right) {
            for (let i = bottom - 1; i > top; i--) {
                ans.push(array[i][left])
            }
        }

        top++
        bottom--
        left++
        right--
    }

    return ans
}

/*
  
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
 
 
*/