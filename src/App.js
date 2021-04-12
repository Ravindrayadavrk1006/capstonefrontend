import React, { useState } from 'react'
import Header from './components/Header'
import { Redirect, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Products from './components/Products'
import { DataProvider } from './components/DataProvider'
import Details from './components/Details/Details'
import Cart from './components/Cart'
import Register from './components/Signup/RegisterBuyer'
import Error from './components/Error'
import 'bootstrap/dist/css/bootstrap.min.css'
import BaseSignUpSignInPage from './components/BaseSignUpSignInPage'
import RegisterEducator from './components/Signup/RegisterEducator';
import RegisterBuyer from './components/Signup/RegisterBuyer';
import RegisterSeller from './components/Signup/RegisterSeller';
import SignIn from './components/SignIn';
import SellerDashboard from './components/SellerDashboardPage';
function App() {
  const [search, setSearch] = useState('')

  return (
    // <DataProvider>
    //   <>
    //     <BaseSignUpSignInPage></BaseSignUpSignInPage>
    //   </>
    // </DataProvider>
    <DataProvider>
      <>
        <Switch>
          <Route exact path='/error404' component={Error} />
          <Route>
            <Header setSearch={setSearch} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route
                exact
                path='/products'
                component={() => <Products search={search} />}
              />
              <Route
                exact
                path='/baseSignUpSignInPage'
                component={BaseSignUpSignInPage}
              />
              <Route exact path='/registerBuyer' component={RegisterBuyer} />
              <Route exact path='/registerSeller' component={RegisterSeller} />
              <Route
                exact
                path='/registerEducator'
                component={RegisterEducator}
              />
              <Route
                exact
                path='/sellerDashboard'
                component={SellerDashboard}
              />
              <Route exact path='/signIn' component={SignIn} />
              <Route exact path='/products/:id' component={Details} />
              <Route exact path='/cart' component={Cart} />
              {/* <Route exact path='/register' component={Register} /> */}
              <Redirect to='/error404' />
              <Products />
            </Switch>
            <Footer />
          </Route>
        </Switch>
      </>
    </DataProvider>
  )
}

export default App
