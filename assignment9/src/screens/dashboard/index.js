import React, { Component } from 'react';
//import swal from 'sweetalert';
import * as firebase from '../../config/firebase'
// import coffeeimg from '../../images/coffee.png'
// import juiceimg from '../../images/juice.png'
// import cocktailimg from '../../images/cocktail.png'
// import profileimg from '../../images/profileimg.jpg'
import { Link } from "react-router-dom";






firebase.db.collection("tblusermeetings").where("status", "==", "PENDING").orderBy("creationtime", "desc")
    .onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
            if (change.type === "added") {

                
                
                console.log("New matchername: ", change.doc.data().matchername);
            }
        });
    });


    
class Dashboard extends Component {


    
    constructor() {
        super();
        this.state = {
            currentuser: '',
            currentuserRecord : '',
            ignore: true,
            title: ''
        };

      
       
    }




    componentDidMount() {
       

        firebase.auth.onAuthStateChanged(user => {
            if (user) {
                
                //console.log(user.uid, " user Undef");
                
                firebase.db.collection("tbluserprofile").where("uid", "==", user.uid).get()
                        .then((query) => {

                            if (!query.empty) {
                               // console.log(query.empty, " NotEmpty");
                                query.forEach((doc) => {
                                    this.setState({ currentuserRecord: doc.data(), currentuser: user })
                                })

                            }else{
                                //console.log(query.empty, " Empty");
                                //console.log(" props", this.props)
                                this.props.history.push('/setprofile');
                            }
                               
                        })
                
                //console.log(user.uid, " user Undef");
               

            } else {
                console.info('Must be authenticated');
                this.props.history.push('/');
            }
        });






    }



    




    render() {
        const { currentuser } = this.state;
        console.log("check",currentuser);
        let styles = { width: "-webkit-fill-available" }
        return (<div className="container"> 
        <div className="row">
        <div className="col-md-10">
        
                <h1> Dashboard </h1>
                </div>
                <div className="col-md-2">
        
             <Link to="/"> <input style={{ marginTop: "29px"}} className="btn btn-primary" type="button" value="logout" /> </Link>
       
             </div>

        </div>
<div className="row"> 
<div className="col-md-2">
            </div>
            {currentuser ? <div className="col-md-3">
                {currentuser.providerData.map((user, index) => {
                    return (<b key={index}> Welcome {user.displayName}</b>)
                }
                )}
                <Link to="/profile"> <input style={styles} className="btn btn-primary" type="button" value="Edit Profile" /> </Link> </div> : <div></div>
            }
            {/* <br />
            <br /> */}
            <div className="col-md-3" style={{marginTop:"19px"}}>
                <Link to="/setupmeeting">  <input style={styles} className="btn btn-primary" type="button" value="Set up a New Meeting" /> </Link>
            </div> <br/> <div className="col-md-3">
                <Link to="/viewmeetings"> <input style={styles} className="btn btn-primary" type="button" value="View Meetings" /> </Link>
            </div>
            </div>
            <br/>
            <div className="row"> 
            <div className="col-md-1">
            </div>
            <div className="col-md-2">
                <Link to="/viewmeetings"> <input style={styles} className="btn btn-primary" type="button" value="Pendings" /> </Link>
            </div>
            <div className="col-md-2">
                <Link to="/viewmeetings"> <input style={styles} className="btn btn-primary" type="button" value="Cancelled" /> </Link>
            </div>
            <div className="col-md-2">
                <Link to="/viewmeetings"> <input style={styles} className="btn btn-primary" type="button" value="Accepted" /> </Link>
            </div>
            <div className="col-md-2">
                <Link to="/viewmeetings"> <input style={styles} className="btn btn-primary" type="button" value="Complicated" /> </Link>
            </div>
            
            <div className="col-md-2">
                <Link to="/viewmeetings"> <input style={styles} className="btn btn-primary" type="button" value="Done" /> </Link>
            </div>
            
            <div className="col-md-1">
            </div>
    </div>
            </div>);
    }




}
export default Dashboard;