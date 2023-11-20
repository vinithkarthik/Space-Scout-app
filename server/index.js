const express = require('express');
require('dotenv').config();
const cors = require('cors');
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`port running on ${port}`));