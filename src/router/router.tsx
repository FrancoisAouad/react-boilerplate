import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home/home';
import { MyComponent } from '../components/molecules/sidebar/sidebar';

const AppRouter = (ob: object) => {
  return (
    <Router>
      <Routes>
        <Route path="/home" Component={HomePage} />
        <Route path='/component' Component={MyComponent} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
