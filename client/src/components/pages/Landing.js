import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Register from './Register';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <Register />
    </section>
  );
};

export default Landing;
