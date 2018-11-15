import React, { Component } from 'react';
import './App.css';
import * as firebase from './config/firebase'
import logo from './logo.svg';
import Routes from './config/router'
import { store,persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';


//const providerx = firebase.provider;

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
		  <div className="App">
			  {/* <header className="App-header-a"> */}
				<div className="container" style={{background:"#337ab7",height:'80px',color:"white"}}>
			<h1>Meeting App </h1>
				</div>
				
							  {/* </header> */}
			  <div className="container">
			  {/* <Provider store={store}>
     			 <PersistGate loading={null} persistor={persistor}> */}
					  <Routes />
				 		 {/* </PersistGate>
   							 </Provider> */}
			  </div>
		  </div>
	  )
  }

}





export default App;
