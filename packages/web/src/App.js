import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ITEMS_QUERY = gql`
  {
    items {
      name
      description
      price
    }
  }
`;

export const App = () => {
  const { loading, error, data } = useQuery(ITEMS_QUERY);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Items</h1>
      {data.items.map(({ name, description, price }) => (
        <div key={name}>
          <h3>{name}</h3>
          <p>{description}</p>
          <p><strong>$ {price}</strong></p>
        </div>
      ))}
    </div>
  );
};
