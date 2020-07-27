'use strict';

module.exports = ({ itemRepository }) => async (searchParam) => {
  const result = await itemRepository.getBy(searchParam);

  return result;
};
