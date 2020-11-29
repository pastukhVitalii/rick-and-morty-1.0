import React from 'react';
import './App.css';
import {Characters} from "./pages/Characters/Characters";
import {Header} from "./Components/Header/Header";
import {Route} from 'react-router-dom';
import {Episodes} from "./pages/Episodes/Episodes";

function App() {
  return (
      <div className="App">
        <Header/>
        <Route exact path={'/'} render={() =>
            <Characters/>}
        />
        <Route exact path={'/episodes'} render={() =>
            <Episodes/>}
        />

      </div>
  );
}

export default App;
