import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Nikki Sato',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdogtime.com%2Fdog-breeds%2Fpembroke-welsh-corgi&psig=AOvVaw0yX6urqbWGzORnxTouAe2Z&ust=1600974149829000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDF0M77_-sCFQAAAAAdAAAAABAF',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
