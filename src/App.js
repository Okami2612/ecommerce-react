import { Route, Router, Switch } from "react-router-dom";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

function App() {
  return (
    <Homepage/>
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Homepage />
    //     </Route>
    //     <Route path="/pay">
    //       <Pay />
    //     </Route>
    //     <Route path="/success">
    //       <Success />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
