
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Register/Register';
import DashBoard from './Components/DashBoard/DashBoard';
import ProductList from './Components/ProductList/ProductList';
import SingleProductListInfo from './Components/SingleProductListInfo/SingleProductListInfo';
import ExploreProductList from './Components/ExploreProductList/ExploreProductList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ConfirmOrder from './Components/ConfirmOrder/ConfirmOrder';
import AllReviewList from './Components/AllReviewList/AllReviewList';
import FAQ from './Components/FAQ/FAQ';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>

            </Route>
            <Route path="/products">
              <ProductList></ProductList>
            </Route>
            <Route path="/allproducts">
              <ExploreProductList></ExploreProductList>
            </Route>

            <Route path="/questions">
              <FAQ></FAQ>
            </Route>

            {/* <Route path="/productorder/:productId">
              <SingleProductListInfo></SingleProductListInfo>
            </Route> */}


            <PrivateRoute path="/productorder/:productId">
              <SingleProductListInfo></SingleProductListInfo>
            </PrivateRoute>

            <Route path="/confirmorders">
              <ConfirmOrder></ConfirmOrder>

            </Route>

            <Route path="/allreviews">
              <AllReviewList></AllReviewList>

            </Route>

            {/* <Route path="/dashboard">
              <DashBoard></DashBoard>
            </Route> */}
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
