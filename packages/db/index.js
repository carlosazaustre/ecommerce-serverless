'use strict';

const db = require('./lib/firebase-db');
const Item = require('./lib/item');

module.exports = {
  item: new Item(db),
};
