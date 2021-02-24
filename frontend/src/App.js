import './App.scss';
import routes from './utils/routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Switch>
          {routes.map(route => (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
};
export default App;
