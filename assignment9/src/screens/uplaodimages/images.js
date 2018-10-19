import React,{Component} from 'react';
import firebase from '../../auth/firebase';
class Allimages extends Component {
    constructor(props) {
      super(props);
     this.state={
         image1:'',
         image2:'',
         iamge3:''
      }
    this.addImage.bind(this);
    }


    image1(e,cb){  
        var storage = firebase.storage();
        var storageRef=firebase.storage().ref();
        console.log(e.target.value);
        var img1=e.target.value;
        
        const file = img1.files[0];
        const name = Date.now() + '-' + file.name;
        const metaData = {contentType: file.type};
    
        storageRef.child(`ads/${name}`).put(file,metaData)
            .then(()=>{
                console.log('Storage Written!');
                return storageRef.child(`ads/${name}`).getDownloadURL();
            })
   
    }

    image2(){

    }

    image3(){

    }
    addImage = e => {
        e.preventDefault();
        // var user_datas=localStorage.getItem("user_data");
        // console.log("hihihihi",user_datas);
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        var userRef = db.collection("Images").add({
        image1:this.state.img1,
        image2:this.state.img2,
        image3:this.state.img3,
    });  
        this.setState({
          name: '',
          phone_number: ''
        });
      };
    
render(){
    return(
        <div>
            <form onSubmit={this.addImage}>
            <input type="file" onChange={this.image1.bind(this)}  />

       <input type="file" onChange={this.image2.bind(this)}  />

       <input type="file" onChange={this.image3.bind(this)}  />

        <button type="submit" >Submit</button>
    </form>
        </div>
    )

}



}
export default Allimages;