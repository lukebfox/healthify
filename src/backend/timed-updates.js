/**
 * 1. get all goals
 *  1.1 Setup recurring query every 24hours
 * 2. decide which goals need to be updated:
 *  2.1 
 * 3. Send Insert/Update query HTTP Post
 */
// const cron = require("node-cron");
// console.log("cron setup");
// cron.schedule("*/2 * * * * *", function() {
//     console.log("Testing cron corns");
// });

const fetch = require("node-fetch");
const query = `
query MyQuery {
    goals {
      allowed_fails
      amount
      decay
      fail
      id
      metrics
      provider
    }
  }
`;
const url = "https://hs-goals.herokuapp.com/v1/graphql";

async function fetchGoals(){
    let response = await fetch(url, { 
        method: 'POST',
        Accept: 'api_version=2',
        'Content-Type': 'application/graphql',
        body: JSON.stringify({ query })
      });
      response = await response.json();
      response = response.data.goals;
      return response;
}

async function main() {
    console.log(await fetchGoals());
}

main();
