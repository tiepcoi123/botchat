const path = require("path")
module.exports = {
    development: false,
    prefix: process.env.PREFIX || '!',
    botName: process.env.BOT_NAME || 'Kiều đẹp zai',
    developer: {
        uid: 100006948469184,
        email: 'tiecoi321@gmail.com',
        github: 'tiepcoi'
    },
    database: {
        postgres: {
            database: process.env.DB_NAME,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            host: process.env.DB_HOST,
        },
        sqlite: {
            storage: path.resolve(__dirname, "./data.sqlite"),
        },
    },
    appStateFile: path.resolve(__dirname, '../appstate.json'),
    swear: {
        limit: 2
    },
    admins: (process.env.ADMINS || '100006948469184').split('_').map(e => parseInt(e))
}
