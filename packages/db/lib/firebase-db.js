'use strict';

const admin = require('firebase-admin');
const { DATABASE_NAME } = require('../config');
const serviceAccount = require('../config/credentials.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${DATABASE_NAME}/.firebaseio.com`,
});

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

module.exports = db;