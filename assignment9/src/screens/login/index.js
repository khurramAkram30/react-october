import React, { Component } from 'react';
import * as firebase from '../../config/firebase'
import {updateUser} from '../../redux/action/authAction';
import { connect } from 'react-redux';

// import { connect } from 'react-redux'

const providerx = firebase.provider;

class login extends Component {


    
constructor(props) {
    super(props);
    this.state = {
        authenticated : false,
        currentuser : ''
    };


    this.login = this.login.bind(this);
}




clearLocalStorage(){

    localStorage.removeItem("beverages");
    localStorage.removeItem("duration");
    localStorage.removeItem("image1");
    localStorage.removeItem("image2");
    localStorage.removeItem("image3");
    localStorage.removeItem("niname");
    localStorage.removeItem("pnumber");
    localStorage.removeItem("dashboard");

    
}


    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.logStatus.logged && nextProps.logStatus.logged !== this.props.logStatus.logged) {
            //hashHistory.push('/app');
        }
    }


    componentDidMount() {


        this.clearLocalStorage();
        firebase.auth.onAuthStateChanged(function (user) {
            if (user) {
                // let currentuserdata = [];
                http://localhost:3000/                // if (user != null) {
                //     user.providerData.forEach(function (profile) {
                //         currentuserdata.push({
                //             'provider': profile.providerId,
                //             'name': profile.displayName,
                //             'rmail': profile.email,
                //             'photourl': profile.photoURL,
                //             'uid': profile.uid
                //         })
                //     });
                  
                // }

                this.setState({ authenticated:false })
            } else {
                console.log("User is Logout");
                //this.props.history.push('/');
            }
        }.bind(this) );



      
    }
    
    login() {
        var that =this;
        firebase.auth.signInWithPopup(providerx).then(function (result) {
         var user = result.user;
            //let currentuserdata = [];
            if (user != null) {
                // user.providerData.forEach(function (profile) {
                //     currentuserdata.push({
                //         'provider': profile.providerId,
                //         'name': profile.displayName,
                //         'rmail': profile.email,
                //         'photourl': profile.photoURL,
                //         'uid': profile.uid
                //     })
                // });
                // that.props.updateUser(user);

                this.setState({ authenticated: true })
           }
        }.bind(this)
        ).catch(function (error) {

        });
        

      
    }



    


    
    




render() {
    // console.log("abcacc",this.props);
    const { authenticated} = this.state;
    if (authenticated) {
       this.props.history.push("/dashboard");
    }
        
    
    return (<div> <button type="submit" onClick={this.login} className="btn btn-primary">Login With Facebook</button> </div>
    )
}


}


// const mapStateToProps = (state) => {
//     return {
//         user: state.authReducers.user
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }



// const mapstateToProps=(state) => {
//         console.log("map state",state.authReducers.user);
//     return {
//         user : state.authReducers.user
//     }
// }


// const mapDispatchToProps= (dispatch) =>{

//     return {

//             updateUser :(user) => dispatch(updateUser(user))

//     }

// }


// export default connect(mapstateToProps,mapDispatchToProps)(login);
export default login;