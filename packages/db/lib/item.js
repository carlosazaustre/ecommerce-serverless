'use strict';

class Item {
  constructor(db, collection = 'items') {
    this.db = db;
    this.collection = db.collection(collection);
  }

  async create(data) {
    const ref = await this.collection.add({
      createdAt: Date.now(),
      ...data,
    });

    return ref.id;
  }

  async getAll() {
    const snapshot = await this.collection.get();

    if (snapshot.empty) return 'No mathing documents';

    const results = [];
    snapshot.forEach(document => results.push(document.data()));

    return results;
  }

  async get(slug) {
    const snapshot = await this.collection
      .where("slug", "==", slug)
      .get();

    if (snapshot.empty) return 'No mathing documents';

    const results = [];
    snapshot.forEach(document => results.push(document.data()));

    return results[0];
  }
}

module.exports = Item;
