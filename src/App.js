import React, { Component } from 'react';
import './App.css';

import MicrosoftLogin from "react-microsoft-login";
import GoogleLogin from 'react-google-login';

class App extends Component {

  render() {
    const authHandler = (err, data) => {
      console.log(err, data);
    };
    const responseGoogle = (data) => {
      console.log(data);
    };

    return (
      <div className="App">
        <h1>Sign up with Microsoft and Google</h1>

      <MicrosoftLogin
        clientId="18bd2206-a8ad-488e-a049-e603048f9817"
        authCallback={authHandler} 
        redirectUri="http://localhost:3000"
        withUserData="true"
      />

      <br />
      <br />

      <GoogleLogin
        clientId="418764490462-mg238uq4gfqju0c30gj84l9coacjuug5.apps.googleusercontent.com"
        buttonText="Sign up with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default App;

