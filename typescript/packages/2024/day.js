const { exec } = require("node:child_process")
const path = require("node:path")

const day = parseInt(process.argv[2], 10)
const fileName = process.argv[3]
const isFirstPuzzle = process.argv[4]

const computedDay = day < 10 ? `0${day}` : `${day}`
const filePath = path.normalize(`${process.cwd()}/../../../data/2024/day-${computedDay}/${fileName}`);
exec(`npx tsx src/day-${computedDay} ${filePath} ${isFirstPuzzle}`, (err, stdout) => {
    if (err) {
        console.log(`error: ${err.message}`)
    }

    console.log(`stdout: ${stdout}`)
})
