function getElapsedTime(code, iterations = 5000, output = 'average') {
    const timestamps = []

    // repeat the iterations 50 times, just to make sure there are a plenty of timestamps
    for (x = 0; x < 50; x++) {
        var start = new Date().getTime();
        // execute the code X times
        for (i = 0; i < iterations; ++i) {
            code()
        }
        // and saves the time elapsed on an array
        var end = new Date().getTime();
        var time = end - start;
        timestamps.push(time)
    }

    const outputTypes = {
        array: timestamps,
        average: timestamps.reduce((x, y) => x + y) / timestamps.length + 'ms'
    }

    // at the end returns the average between all the timestamps, or the timestamps itself
    return {
        time: outputTypes[output] || outputTypes.average,
        result: code()
    }
}

const file = process.argv[2];
if(!file) return console.error('❌ Missing file to compare, ex: array/at')
const test = require(`./${file}`);

// shows what function was executed
console.log(test.toString())
console.log(`\nCode executed 250.000 times, time is the average executing 5.000 functions`)

let biggestLineLength = 40
const formatText = ([key, value]) => {
    const string = `\n| ${key.padEnd(7)}: ${value.toString()}`
    if (string.length > 40) biggestLineLength = string.length
    return `${string.padEnd(biggestLineLength)} |`
}

const textToGrid = (title, text) => {
    return `${'+-'.padEnd(biggestLineLength, '-')}+` +
        `\n${`| ${title}`.padEnd(biggestLineLength)}|` +
        `\n${'| '.padEnd(biggestLineLength)}|` +
        `${text.join('')}`
}

const sortByLessLength = (a, b) => a.toString().length > b.toString().length ? 1 : -1
const sortByMoreLength = (a, b) => a.toString().length > b.toString().length ? -1 : 1

let native = getElapsedTime(test)
native = Object.entries(native).sort(sortByMoreLength).map(formatText).sort(sortByLessLength)
native = textToGrid('Native: ', native)

console.log(`\n${native}`);

require(`../${file}`);

let polyfill = getElapsedTime(test)
polyfill = Object.entries(polyfill).sort(sortByMoreLength).map(formatText).sort(sortByLessLength)
polyfill = textToGrid('Polyfill: ', polyfill)

console.log(`${polyfill}`);
console.log(`${'+-'.padEnd(biggestLineLength, '-')}+`)