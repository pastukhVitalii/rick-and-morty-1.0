import React from 'react';
import './App.css';
import {Characters} from "./pages/Characters/Characters";
import {Header} from "./Components/Header/Header";
import {Route} from 'react-router-dom';
import {Episodes} from "./pages/Episodes/Episodes";
import {Locations} from "./pages/Locations/Locations";
import {MyWatchList} from "./pages/MyWatchList/MyWatchList";

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
        <Route exact path={'/locations'} render={() =>
            <Locations/>}
        />
        <Route exact path={'/myWatchList'} render={() =>
            <MyWatchList/>}
        />

      </div>
  );
}

export default App;
