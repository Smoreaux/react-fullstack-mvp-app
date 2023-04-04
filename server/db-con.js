/**This is where your data base connection is made and exported to the express server (in index.js) vis is require pool method!!! */

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: "5432",
    database: "perngoals"
});

module.exports = pool;