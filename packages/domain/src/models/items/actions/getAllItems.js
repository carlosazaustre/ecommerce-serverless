'use strict';

module.exports = ({ itemRepository }) => async () => {
  const results = await itemRepository.list();

  return results;
};
