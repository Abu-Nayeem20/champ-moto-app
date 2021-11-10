import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllProducts from './Pages/AllProducts/AllProducts/AllProducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/HomePage/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          <Route path='/home'>
              <Home />
          </Route>
          <Route path='/allProducts'>
              <AllProducts />
          </Route>
          <Route path='/dashboard'>
              <Dashboard />
          </Route>
          <Route path='*'>
              <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
