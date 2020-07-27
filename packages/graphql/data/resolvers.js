const { item } = require('@ecommerce/domain');

const resolvers = {
  Query: {
    items: async () => await item.getAllItems(),
    item: async (parent, { slug }) => await item.getItem(slug),
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
      const itemId = await item.createItem(newItem);
      return {
        ...newItem,
        id: itemId
      }
    },
  },
};

module.exports = resolvers;
