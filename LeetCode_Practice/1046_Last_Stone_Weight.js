/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length == 1) return stones[0]

    while(stones.length > 1){
        stones = stones.sort((a, b) => a - b);
        
        const length = stones.length;

        const diff = stones[length - 1] - stones[length - 2];

        stones[length - 2] = diff;

        stones.pop()
    }

    return stones[0]
};

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length == 1) return stones[0]

    while(stones.length > 1){
        stones = stones.sort((a, b) => a - b);
        
        const length = stones.length;

        const diff = stones[length - 1] - stones[length - 2];

        if(diff){
            stones[length - 2] = diff;
        } else {
            stones.pop()
        }

        stones.pop()
    }

    return stones.length > 0 ? stones[0] : 0
};

// [1, 1, 2, 4, 7, 8]

// [1, 1, 2, 4, 7, 8]