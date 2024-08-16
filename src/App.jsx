import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tabs from './components/Tabs/Tabs';
import Users from './components/Users/Users';
import Goods from './components/Goods/Goods';
import Messages from './components/Messages/Messages';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Tabs />
        <div className="content">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/goods" element={<Goods />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/" element={<Users />} /> {/* Default route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
