/* Given an image represented by an N x N matrix, 
where each pixel in the image is represented by an integer, 
write a method to rotate the image by 90 degrees.
Can you do this in place? */

function rotateMatrix(matrix) {
    // edge cases
    if (matrix.length == 0 || matrix.length != matrix[0].length) return false

    let n = matrix.length;

    for (let i = 0; i < matrix.length / 2; i++) {
        let first = i;
        let last = n - 1 - i;
        for (let j = first; j < last; j++) {
            let offset = j - first;
            const top = matrix[first][j]

            // left -> top
            matrix[first[j]] = matrix[last - offset][first];

            // bottom -> left
            matrix[last - offset][first] = matrix[last][last - offset];

            // right -> bottom
            matrix[last][last - offset] = matrix[j][last];

            // top -> right
            matrix[j][last] = top;
        }
    }
}