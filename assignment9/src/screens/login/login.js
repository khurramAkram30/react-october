import React, { Component } from 'react';
// import '../App.css';
import firebase from '../../auth/firebase';
import Profile from '../profile/profile';
import { constants } from 'fs';
import { BrowserRouter as Router, Route, Link,Redirect,HashRouter } from 'react-router-dom';
import Routes from '../../config/routes';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

var provider = new firebase.auth.FacebookAuthProvider();

class Login extends Component {
  constructor(props) {
    super(props);
   this.state={
   }
    this.login=this.login.bind(this);
    // console.log(props);
  }
  login(){
      // const {pop}=this.state;
      firebase.auth().signInWithPopup(provider).then(function(result,) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // this.pop.history.push('../profile/profile')
          let currentuserdata = [];
          if (user != null) {
              user.providerData.forEach(function (profile) {
                  currentuserdata.push({
                      'provider': profile.providerId,
                      'name': profile.displayName,
                      'email': profile.email,
                      'photourl': profile.photoURL,
                      'uid': profile.uid
                  })
                });
              
              }
                localStorage.setItem("user_data",JSON.stringify(currentuserdata));
                var user_datas=localStorage.getItem("user_data");
                
                // console.log("user",user_datas);
      
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