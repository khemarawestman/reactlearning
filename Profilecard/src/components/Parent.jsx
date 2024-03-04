import React from 'react';
import ProfileCard from './ProfileCard'; 
import Child from './Child'; 


function Parent() {
  const user = {
    name: 'Nicodemus Naveltuta',
    age: '47',
    title: 'vice ninja',
    email: 'nicokick@theoffice.net'
  };

  return <ProfileCard name={user.name} title={user.title} />;
}

// Alternativ implementation för exempel 4
/*
function Parent({ message, energy }) {
  return <Child message={message} energy={energy} />;
}
*/

export default Parent;
