const Chance = require('chance')

const generateUserId = (length = 10) => {
    const userId = Chance().string({
        length
    })  
    return userId
}

module.exports = {
    generateUserId
}