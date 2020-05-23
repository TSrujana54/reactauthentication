import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/header";
import Footer from './components/Footer/footer';

import DashBoard from './components/DashBoard/dashboard';

import Login from "./components/Login/login";


import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  const [token, setToken] = useState();

  // To get a Token
  const updateToken = (token: string) => {
    localStorage.setItem('token', token)
    setToken(token);
  }

  return (
    <div className="App">
      <Header></Header>
      <Router>
        {/* <Login></Login>
        <DashBoard></DashBoard> */}

        <Route exact path='/dashboard' component={() => (token) ? <DashBoard /> : <Redirect to='/' />}></Route>

        <Route exact path="/" component={() => (token) ? <Redirect to='/dashboard'></Redirect> : <Login updateToken={updateToken}></Login>}></Route>
      </Router >

      <Footer></Footer>

    </div >
  );
}

export default App;
