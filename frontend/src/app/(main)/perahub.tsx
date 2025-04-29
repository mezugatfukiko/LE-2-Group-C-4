import React from 'react';
import Header from './components/Header';
import DashboardSummary from './components/DashboardSummary';
import GraphBarForm from './components/GraphBarForm';
import Entries from './components/Entries';

const PeraHub = () => {
  const user = { name: 'John Doe', email: 'john.doe@example.com' };

  return (
    <div>
      <Header user={user} />
      <div style={{ backgroundColor: '#F5F5FA', minHeight: '100vh', paddingBottom: '50px' }}>
        <DashboardSummary />
        <GraphBarForm />
        <Entries/>
      </div>
    </div>
  );
};

export default PeraHub;
