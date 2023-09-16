function cakes(recipe, available) {
    let maxCakes = Infinity;
    for (let key in recipe) {
        if (available[key]) {
            const div = Math.floor(available[key] / recipe[key])
            maxCakes = Math.min(maxCakes, div)
        } else {
            return 0
        }
    }
    return maxCakes
}