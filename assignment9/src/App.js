import React, { Component } from 'react';
import './App.css';
import firebase from './auth/firebase';
import { constants } from 'fs';
import Routes from './config/routes'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import { BrowserRouter, Route, Link } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    
    // this.state = {
    //   coords: null
    // };

    // this.login = this.login.bind(this);
    // this.updateCoords = this.updateCoords.bind(this);
  }

  // componentDidMount() {
  //   this.setPosition();
  // }


  // setPosition() {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     this.setState({coords: position.coords})
  //   });
  // }

  // updateCoords({latitude, longitude}) {
  //   this.setState({coords: {latitude, longitude}})
  // }

  render() {
    // const {coords} = this.state;
    
    return(
      <div>
        {/* <button onClick={this.login}>Login with facebook shareef!</button>  */}
        <Routes />
    
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

export default App;