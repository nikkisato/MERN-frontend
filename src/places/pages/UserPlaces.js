import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    imageUrl:
      'https://i0.wp.com/thepointsguy.com/wp-content/uploads/2019/06/GettyImages-960609922.jpg?fit=2121%2C1414px&ssl=1',
    address: '20 W 34th St, New York, NY 10001',
    description:
      'The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan in New York City. It was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from Esmpire State the nickname of the state of New York.',
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    imageUrl:
      'https://i0.wp.com/thepointsguy.com/wp-content/uploads/2019/06/GettyImages-960609922.jpg?fit=2121%2C1414px&ssl=1',
    address: '20 W 34th St, New York, NY 10001',
    description:
      'The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan in New York City. It was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from Esmpire State the nickname of the state of New York.',
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: 'u2',
  },
];

const UserPlaces = (props) => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
