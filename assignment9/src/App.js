import React, { Component } from 'react';
import './App.css';
import * as firebase from './config/firebase'

import Routes from './config/router'


const providerx = firebase.provider;

class App extends Component {


constructor(prop){

	super(prop)


	this.state = {
		
		currentuser: null
	};

	// this.login = this.login.bind(this);
	this.logout = this.logout.bind(this);
	
}

	


	

	logout() {
		//firebase.auth.signOut().then()
		firebase.auth.signOut().then(function (result) {
			var user = result;
			console.log(user);
			// this.setState({
			// 	currentuser: null
			// })


		}).catch(function (error) {
			console.error("error** ", error);
		});
	}

	



  render() {

  

	 
	  

	  return (
		  <div>

			  <div className="container-fluid" style={{background:"red"}}>
			  <h4>Meeting App</h4>
			  </div>
			  <Routes />
			  <div className="container-fluid" style={{background:"red", marginTop:"300px"}}>
			  <p>All Right Reserved</p>
			  </div>
			  {
				  
				  

			}
		  </div>
	  )
  }

}





export default App;
