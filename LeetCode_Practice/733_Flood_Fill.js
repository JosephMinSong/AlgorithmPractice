/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const originalColor = image[sr][sc];
    const rows = image.length;
    const cols = image[0].length;

    dfs(sr, sc, rows, cols, image, originalColor, color)

    return image
};

function dfs(r, c, rows, cols, image, originalColor, color) {
    // base case
    if (r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] != originalColor || image[r][c] == color) {
        return
    }

    image[r][c] = color

    dfs(r + 1, c, rows, cols, image, originalColor, color) // below
    dfs(r - 1, c, rows, cols, image, originalColor, color) // above
    dfs(r, c + 1, rows, cols, image, originalColor, color) // right
    dfs(r, c - 1, rows, cols, image, originalColor, color) // left
}