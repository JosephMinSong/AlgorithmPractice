/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    let canPlace = true;

    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i] == 1){
            canPlace = false
        } else if(flowerbed[i] == 0 && canPlace && flowerbed[i+1] != 1){
            canPlace = false
            count ++
        } else {
            canPlace = true
        }
    }

    return count >= n
};


/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;

    for(let i = 0; i < flowerbed.length; i++){
        let left_empty = false;
        let right_empty = false;

        if(i == 0 || flowerbed[i-1] == 0){
            left_empty = true;
        }

        if(i == flowerbed.length - 1 || flowerbed[i+1] == 0){
            right_empty = true;
        }

        if(flowerbed[i] == 0 && left_empty && right_empty){
            flowerbed[i] = 1
            count ++
        }
        
    }

    return count >= n
};
