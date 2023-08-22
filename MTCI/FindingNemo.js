const large = new Array(10000).fill("nemo")

function findNemo(arr) {
    let t0 = performance.now();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "nemo") {
            console.log("found")
        }
    }

    let t1 = performance.now();

    console.log("Call took " + (t1 - t0))
}

findNemo(large)