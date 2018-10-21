import React,{Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Maps extends Component{
constructor(){
    super();
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

