import React from 'react';
import Header from './components/Header'; // Correct relative path

const PeraHub = () => {
  const user = { name: 'John Doe', email: 'john.doe@example.com' };

  return (
    <div>
      <Header user={user} />
      {/* Other content for your app goes here */}
    </div>
  );
};

export default PeraHub;