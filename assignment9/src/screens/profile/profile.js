import React, { Component } from 'react';
// import './App.css';
import firebase from '../../auth/firebase';
import { constants } from 'fs';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import Firestore from 'firebase/firestore';
class Profile extends Component {
  constructor() {
    super();
    this.state={
      name:'',
      phone_number:''
    }
    // this.name=this.name.bind(this);
    this.addUser=this.addUser.bind(this);
  
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

  // addUser = e => {
  //   e.preventDefault();
  //   this.setState({
  //     fullname: '',
  //     email:''
  //   });
  // };

  addUser = e => {
    e.preventDefault();
    var user_datas=localStorage.getItem("user_data");
    console.log("hihihihi",user_datas);
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    var userRef = db.collection("users").add({
      Name: this.state.name,
      Phone_Number: this.state.phone_number
    });  
    this.setState({
      name: '',
      phone_number: ''
    });
  };


  render() {
    const {name,phone_number} =  this.state;
   
   
    
    return(
      <div className="conatiner">
         <h4 style={{textAlign:"center"}}>Add Personal Info </h4>
        <div className="row">
         <div className="col-md-4"></div>
      <div className="col-md-4">
         <form onSubmit={this.addUser}>
         <input type="text" placeholder="Enter Your Name" className="form-control" onChange={this.search.bind(this)} value={this.state.name}/>
         <br />
         <input type="number" placeholder="Enter Your Number" className="form-control" onChange={this.phone.bind(this)} value={this.state.phone_number}/>
         <br />
          <button type="submit" className="btn btn-primary">Add</button>
 </form>
         </div>
         <div className="col-md-4"></div>
 </div>
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
// })/