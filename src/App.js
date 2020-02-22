import React from 'react';
import Layout from './containers/Layout/Layout';
import Cards from './components/Cards/Cards';
import Task from './containers/task/Task';

function App() {
  return (
    <div>
      <Layout>
        <Task/>
      </Layout>
    </div>
  );
}

export default App;
