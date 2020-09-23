import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Nikki Sato',
      image:
        'https://static.boredpanda.com/blog/wp-content/uploads/2020/08/1-5f2a6456cccf0__700.jpg',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
