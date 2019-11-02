/**
 * 1. get all goals
 *  1.1 Setup recurring query every 24hours
 * 2. decide which goals need to be updated:
 *  2.1 
 * 3. Send Insert/Update query HTTP Post
 */
const cron = require("node-cron");
console.log("cron setup");
cron.schedule("*/2 * * * * *", function() {
    console.log("Testing cron corns");
});