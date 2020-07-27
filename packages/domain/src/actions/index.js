const itemRepository = require('../../repositories').itemRepository;

module.exports = {
  createItem: require('./createItem')({ itemRepository }),
  getAllItems: require('./getAllItems')({ itemRepository }),
  getItem: require('./getItem')({ itemRepository }),
};
