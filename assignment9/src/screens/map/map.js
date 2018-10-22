import React,{Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Maps extends Component{
constructor(props){
    super(props);
    this.state = {
      coords: null
    };

    this.updateCoords = this.updateCoords.bind(this);
  }


   setPosition() {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({coords: position.coords})
        console.log(this.state.coords);
      });
    }
  

      updateCoords({latitude, longitude}) {
    this.setState({coords: {latitude, longitude}});
    console.log(this.state.coords);
  }

  componentDidMount() {
    this.setPosition();
    localStorage.getItem("beverages");
    localStorage.getItem("timing");
    localStorage.getItem("profile");
    localStorage.getItem("images");
    localStorage.getItem("user_data");
    var images=JSON.parse(localStorage.getItem("images"));
    console.log("asd",images.image1);
    
    
    
    
  }

  add(){
    let path='./dashboard';
    this.props.history.push(path);
  }

    render(){
            const {coords} = this.state;

        return(
            <div>
                  {coords && <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          coords={coords}
          updateCoords={this.updateCoords}
        />}
                    <form onSubmit={this.add.bind(this)}>
                    <button>Submit</button>
                    </form>
            </div>
        )
    }


}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
  >
    {props.isMarkerShown && 
    <Marker 
      position={{ lat: props.coords.latitude, lng: props.coords.longitude }} 
      draggable={true}
      onDragEnd={position => {
          props.updateCoords({latitude: position.latLng.lat(), longitude: position.latLng.lng()})
      }}
      />}
  </GoogleMap>
))



export default Maps;

