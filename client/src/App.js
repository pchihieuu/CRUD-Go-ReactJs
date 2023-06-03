import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import List from './users/List';
import ViewUser from './users/ViewUser'; 


export default function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<List />} />
        <Route path="/profile/:id" element={<ViewUser />} />
      </Routes>
    </Router>
  );
}

