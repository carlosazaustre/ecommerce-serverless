'use strict';

const admin = require('firebase-admin');
const { DATABASE_NAME } = require('./config');
const serviceAccount = require('./credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${DATABASE_NAME}/.firebaseio.com`,
});

const database = admin.firestore();
database.settings({ timestampsInSnapshots: true });

module.exports = database;