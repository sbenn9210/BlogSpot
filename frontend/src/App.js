import './App.scss';
import routes from './utils/routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/navigation/NavigationBar'

const App = () => {
  return (
    
    <Router>
    <NavigationBar/>
    <div>
        <Switch>
          {routes.map(route => (
            <Route
              exact
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
