'use strict'

const dev = {
    app : {
        http : process.env.DEV_DB_HTPP || `mongodb+srv`
    },
    db : {
        http : process.env.DEV_DB_HTPP || `mongodb+srv`,
        name : process.env.DEV_DB_NAME || `quangdz`,
        password : process.env.DEV_DB_PASSWORD || `quangdz123`,
        domain : process.env.DEV_DB_DOMAIN || `localhost:27017`,
        db: process.env.DEV_DB || 'test'
    }
}

const pro = {
    app : {
        http : process.env.PRO_DB_HTTP || `none`
    },
    db : {
        http : process.env.PRO_DB_HTTP || `none`,
        name : process.env.PRO_DB_NAME || `none`,
        password : process.env.PRO_DB_PASSWORD || `none`,
        hash : process.env.PRO_DB_HASH || `none`
    }
}

const config = { dev, pro };
const env = process.env.NODE_ENV || 'dev';

module.exports = config[env];