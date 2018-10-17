import React, { Component } from 'react';
// import '../App.css';
import firebase from '../../auth/firebase';
import { constants } from 'fs';
import { BrowserRouter as Router, Route, Link,Redirect } from 'react-router-dom';
import Routes from '../../config/routes';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

var provider = new firebase.auth.FacebookAuthProvider();

class Login extends Component {
  constructor(props) {
    super(props);
    this.login=this.login.bind(this);
    console.log("ad");
  }
  login(){
      firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
          console.log("user",user);
          console.log("token",token);
          this.props.history.push('./profile/profile');
          if(user !== null && token !== null){
        //     <Redirect
        //     to={{
        //       pathname: "./profile/profile",
        //     //   state: { from: props.location }
        //     }}
        //   />
        }
        else{
          console.log("session end");
        }
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(error);
      });
  }
  render() {
    // const {coords} = this.state;
    
    return(
      <div>
          <h1>
            connect with facebook
          </h1>
          <button onClick={this.login}>Login</button>
      </div>
   )
 }

}

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={14}
//     center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
//   >
//     {props.isMarkerShown && 
//     <Marker 
//       position={{ lat: props.coords.latitude, lng: props.coords.longitude }} 
//       draggable={true}
//       onDragEnd={position => {
//           props.updateCoords({latitude: position.latLng.lat(), longitude: position.latLng.lng()})
//       }}
//       />}
//   </GoogleMap>
// ))

export default Login;