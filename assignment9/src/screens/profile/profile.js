import React, { Component } from 'react';
// import './App.css';
import firebase from '../../auth/firebase';
import { constants } from 'fs';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Firestore from 'firebase/firestore';
class Profile extends Component {
  constructor() {
    super();
    this.state={
      name:'',
      phone_number:''
    }
    // this.name=this.name.bind(this);
  }


  search(e){
    const {name} =this.state;
    this.setState({
      name:e.target.value
    })
  }
  phone(e){
    const {phone_number} =this.state;
    this.setState({
      phone_number:e.target.value
    })
  }
  render() {
    const {name,phone_number} =  this.state;
    console.log(name,phone_number);
   
    Firestore().collection('users').add({
      title: this.state.textInput,
      complete: false,
    })    
    return(
      <div>
         <h4 style={{textAlign:"center"}}>Add Personal Info </h4>
         <input type="text" onChange={this.search.bind(this)}/>
         <input type="number" onChange={this.phone.bind(this)}/>
 
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

export default Profile;




// var a="";
// const db=firebase.firestore;
// // const {name}=this.state;
//  db.collection("categories").add({ a })
// .then((res) => {
//     console.log(res);
//     window.location = "home.html";
// })
// .catch((error) => {
//     var errMessage = error.message;
//     console.log(errMessage);
// })