/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let seen = new Array(rooms.length).fill(false)

    seen[0] = true

    let stack = [rooms[0]];

    while (stack.length > 0) {
        let roomKeys = stack.pop()
        for (let i = 0; i < roomKeys.length; i++) {
            const roomKey = roomKeys[i]
            if (seen[roomKey] == false) {
                stack.push(rooms[roomKey])
                seen[roomKey] = true
            }
        }
    }

    for (let i = 0; i < seen.length; i++) {
        if (seen[i] == false) {
            return false
        }
    }

    return true
};