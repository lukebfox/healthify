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


async function fetchGoals(){
    const query = `
    query MyQuery {
        goals {
        allowed_fails
        amount
        decay
        fail
        id
        provider
        recurrence
        start_date
        succ
        successful_recurrences
        user_id
        type
        }
    }
    `;
    const url = "https://hs-goals.herokuapp.com/v1/graphql";
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
    const goals = await fetchGoals();
    console.log(goals);

}

main();

/**
 * 
 * @param {type, start_date, current_date} parameters 
 * @return {json object}
 */
async function getProviderResources(parameters){
    const url = getResourceUrl(parameters.types);
    let response = await fetch(url);
    response = await response.json();
    return response;
}
/**
 * 
 * @param {string} provider
 * @returns {string} 
 */
function getResourceUrl(type){
    //TODO: create CapitalOne Account 
    const customerId = "5dbdef083c8c2216c9fcb723";
    const accountId = 0;

    switch(type){
        case 'gambling':
        case 'drinking':
            return `http://api.reimaginebanking.com/merchants/${accountID}/purchases?key=c5f3464801f939e6265763316ccfb35b`;
    }
}

function test(){
    console.log(getResourceUrl("capital_one"));
    let mockParameters = {
        type: "alcohol",
        start_date: Date.now(),
        current_date: Date.now()
    }
}