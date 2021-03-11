
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/Routing/routes.js';

class App extends React.Component {
  state = {
    inputValue: 'Data'
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* <Route exact path={Routes[0].path} component={Routes[0].component} default={Routes[0].default} key={Routes[0].key} />
            <Route exact path={Routes[1].path} component={Routes[1].component} default={Routes[1].default} key={Routes[1].key} />
            <Route exact path={Routes[2].path} component={Routes[2].component} default={Routes[2].default} key={Routes[2].key} /> */}
            {Routes.map((route) => (
              <Route exact path={route.path} component={route.component} default={route.default} key={route.key} />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;