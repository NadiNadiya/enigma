import React from 'react';

const NotFound = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Comic Sans MS, cursive, sans-serif',
    color: 'rgb(151, 100, 237)'
  };

  const emojiStyle = {
    fontSize: '5rem',
    marginBottom: '1rem',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0',
  };

  const messageStyle = {
    fontSize: '1.2rem',
    margin: '0',
  };

  return (
    <div style={containerStyle}>
      <span role="img" aria-label="Oops" style={emojiStyle}>
        🦄
      </span>
      <h2 style={headingStyle}>Uh-oh! The page is hiding...</h2>
      <p style={messageStyle}>
        It seems the page you're looking for has embarked on a mysterious journey.
      </p>
    </div>
  );
};

export default NotFound;

