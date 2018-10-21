import React,{Component} from 'react';
import firebase from '../../auth/firebase';
import { storage } from 'firebase';
import { BrowserRouter as Router, Route, Link,Redirect,HashRouter } from 'react-router-dom';

class Allimages extends Component {
    constructor(props) {
      super(props);
     this.state={  
         image1:'',
         image2:'',
         iamge3:'',
         url:[]
      }
    // this.addImage.bind(this);
    }


    image1(e) {  
        const {image1,url} =this.state;
        const storage=firebase.storage();
        if(e.target.files[0]){
        const image=e.target.files[0];
        const uplaodtask=storage.ref(`images/${image.name}`).put(image);
        uplaodtask.on('state_changed',
            (snapshot) =>{

            },
            (error) =>{
                
            },
            () =>{
               storage.ref('images').child(image.name).getDownloadURL().then(url =>{
                //    console.log(url);
                   this.setState({image1:url});
                   console.log("asdsa1",this.state.image1);
               }) 
            }
    )
    }
}

    image2(e){
        const storage=firebase.storage();
        const {image2,url} =this.state;
        if(e.target.files[0]){
        const image=e.target.files[0];
        const uplaodtask=storage.ref(`images/${image.name}`).put(image);
        uplaodtask.on('state_changed',
            (snapshot) =>{

            },
            (error) =>{
                
            },
            () =>{
               storage.ref('images').child(image.name).getDownloadURL().then(url =>{
                //    console.log(url);
                   this.setState({image2:url});
                   console.log("asdsa2",this.state.image2);
               }) 
            }
    )
    }

    }

    image3(e){

        const storage=firebase.storage();
        const {image3,url} =this.state;
        if(e.target.files[0]){
        const image=e.target.files[0];
        const uplaodtask=storage.ref(`images/${image.name}`).put(image);
        uplaodtask.on('state_changed',
            (snapshot) =>{

            },
            (error) =>{
                
            },
            () =>{
               storage.ref('images').child(image.name).getDownloadURL().then(url =>{
                //    console.log(url);
                   this.setState({image3:url});
                   console.log("asdsa3",this.state.image3);
                    var but=document.getElementById("button");
                    but.style.display="block";
               
                }) 
            }
    )
    }    

    }
    addImage = () => {
        const {image1,image2,image3} =this.state;
        var arr=[];
        arr.push({image1,image2,image3});
        // arr.map(val =>{
        //     return console.log("asd",val);
        // })
        // localStorage.setItem("images",JSON.stringify(arr));
        // var getitems=localStorage.getItem(JSON.parse("images"));
        // getitems.map(val=>{


        // })
            //  console.log("asd",getitems);
            let path = `/Beverages`;
            this.props.history.push(path);        
    
    };
    
render(){
    return(
        <div>

            <input type="file" onChange={this.image1.bind(this)}  />

       <input type="file" onChange={this.image2.bind(this)}  />

       <input type="file" onChange={this.image3.bind(this)}  />

        <button type="submit" id="button" onClick={this.addImage}  >next</button>
  
        </div>
    )

}



}
export default Allimages;