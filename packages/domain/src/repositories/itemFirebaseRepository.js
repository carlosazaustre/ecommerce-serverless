'use strict';

const database = require('../../connectors/firebase');
const ITEMS_COLLECTION = 'items';

const dbRef = database.collection(ITEMS_COLLECTION);

async function list() {
  const results = [];
  const documents = await dbRef.get();

  if (documents.empty) return 'No matching documents found';

  documents.forEach(document => results.push(document.data()));

  return results;
}

async function getBy(searchParam) {
  const results = [];
  const documents = await dbRef
    .where("slug", "==", searchParam)
    .get();

  if (documents.empty) return 'No mathing documents';

  documents.forEach(document => results.push(document.data()));

  return results[0];
}

async function add(data) {
  const ref = await dbRef.add({
    createdAt: Date.now(),
    ...data,
  });

  return ref.id;
}

module.exports = {
  list,
  getBy,
  add,
};
