import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/home';
import { MyComponent } from '../components/sidebar';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" Component={HomePage} />
        <Route path='/my-component' Component={MyComponent} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
