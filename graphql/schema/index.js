const { schemaComposer } = require('graphql-compose');
// const addResolvers = require('../resolvers');

// addResolvers();

// const queries = require('./queries');
// const mutations = require('./mutations');

// Add fields and resolvers to rootQuery
// schemaComposer.Query.addFields(queries);
schemaComposer.Query.addFields({
    aas: {
        type: 'String',
        resolve: () => 'g'
    }
});
// schemaComposer.Mutation.addFields(mutations);

const schema = schemaComposer.buildSchema();

module.exports = schema;
