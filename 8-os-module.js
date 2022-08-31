const os = require('os')

//show user info
const user = os.userInfo()
console.log(user)

//show system uptime
console.log(`The system uptime is ${os.uptime}`)

//show OS info

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS)
