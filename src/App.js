import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Topbar from './Components/Topbar/Topbar';
import Sidebar from './Components/SideBar/Sidebar';
import Home from '../src/pages/home/Home';
import UserList from '../src/pages/userList/UserList';
import NewUser from '../src/pages/newUser/NewUser';
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


import "./app.css";

const App = () => {
  return (
    <Router> 
      {/** Topbar **/ }
      <Topbar />

      {/** Sidebar **/ }
      <div className="container">
        <Sidebar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/users">
            <UserList />
          </Route>

          <Route path="/user/:Id">
            <User />
          </Route>

          <Route path="/newUser">
            <NewUser />
          </Route>

          <Route path="/products">
            <ProductList />
          </Route>

          <Route path="/product/:productId">
            <Product />
          </Route>

          <Route path="/newProduct">
            <NewProduct />
          </Route>

        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
