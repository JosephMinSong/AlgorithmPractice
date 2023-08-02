// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

function humanReadable (seconds) {
    let time = []
    let minutes = Math.floor(seconds/60)
    let hours = 0
    if (minutes >= 60){
        hours = Math.floor(minutes/60)
        minutes %= 60
    }
    let remaining_sec = seconds % 60
    time.push(hours.toString().padStart(2, '0'), minutes.toString().padStart(2, '0'), remaining_sec.toString().padStart(2, '0'))
    return time.join(':')
}

