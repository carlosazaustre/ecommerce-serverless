const { item } = require('@ecommerce/db');

const resolvers = {
  Query: {
    items: async () => await item.getAll(),
    item: async (parent, { slug }) => await item.get(slug),
  },

  Mutation: {
    addItem: async (parent, {
      name,
      description,
      price,
      photo,
    }) => {
      const newItem = {
        name,
        description,
        price,
        photo,
      }
      const itemId = await item.create(newItem);
      return {
        ...newItem,
        id: itemId
      }
    },
  },
};

module.exports = resolvers;
