import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/collection" component={CulturalCollection} />
        <Route path="/calendar" component={FestivalCalendar} />
        <Route path="/my-collection" component={MyCollection} />
        <Route path="/map" component={Map} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
