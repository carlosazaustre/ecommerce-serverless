'use strict';

module.exports = ({ itemRepository }) => async (data) => {
  const ref = await itemRepository.add({
    createdAt: Date.now(),
    ...data,
  });

  return ref.id;
};
