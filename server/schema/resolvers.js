const hubs = require('../fakehubs.json');
const fs = require('fs');

const resolvers = {
    Query: {
        getHub(parent, args) {
            // return hubs[parseInt(args['id'])]
            return hubs[0];
        }
    },

    Mutation: {
        updateHub(parent, args) {        
            hubs[0].description = args.description;
            fs.writeFile('/Users/srailkar/Desktop/my-app/server/fakehubs.json', JSON.stringify(hubs), err => {
                if (err) {
                    console.error(err);
                }
            })
            return hubs[0];
        }
    }
};

module.exports = { resolvers }