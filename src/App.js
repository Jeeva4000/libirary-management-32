import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'; 
import AddBooks from './Component/AddBooks';
import EditBooks from './Component/EditBooks';
import BooksList from './Component/BookList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <BooksList/>
        </Route>
        <Route exact path="/add">
          <AddBooks />
        </Route>
        <Route exact path="/edit/:id">
          <EditBooks />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
