const functions = require('firebase-functions');
const { gqlServer } = require('./graphql/server');

const server = gqlServer();

exports.api = functions.https.onRequest(server);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
