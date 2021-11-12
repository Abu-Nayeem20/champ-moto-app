import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import AllProducts from './Pages/AllProducts/AllProducts/AllProducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div>
      <AuthProvider>
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
          <Route path='/login'>
              <Login />
          </Route>
          <Route path='/register'>
              <Register />
          </Route>
          <PrivateRoute path='/purchase/:productId'>
              <Purchase />
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
              <Dashboard />
          </PrivateRoute>
          <Route path='*'>
              <NotFound />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
