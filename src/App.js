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
        clientId="XXXXX"
        authCallback={authHandler} 
        redirectUri="http://localhost:3000"
        withUserData="true"
      />

      <br />
      <br />

      <GoogleLogin
        clientId="XXXXXXX"
        buttonText="Sign up with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default App;

