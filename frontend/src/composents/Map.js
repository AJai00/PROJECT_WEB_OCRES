import React from 'react';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import Geocode from "react-geocode";
import { Descriptions } from 'antd';
import Autocomplete from 'react-google-autocomplete';

Geocode.setApiKey("AIzaSyC1T1CU6roR7kuWtE_NGNuC6gYXFOBt2Uk")
class Map extends React.Component {


  state = {
    adresse: "",
    departement: "",
    ville: "",
    région: "",
    zoom: 15,
    height: 400,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    }
  
  }
  
  componentDidMount(){
  
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          mapPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          markerPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
  
        }, () => {
          Geocode.fromLatLng(position.coords.latitude, position.coords.longitude)
  .then(response => {
  console.log('response', response)
  const adresse = response.results[0].formatted_address,
        addressArray = response.results[0].address_components,
        departement = this.getdepartement(addressArray),
        ville = this.getville(addressArray),
        région = this.getState(addressArray)  
  
        this.setState({
          adresse: (adresse) ? adresse : "",
          ville: (ville) ? ville : "",
          departement: (departement) ? departement : "",
          région: (région) ? région: "",
          
  
        })
  
  })
        })
      })
    }
  
  }
  
  
  
  
  getdepartement = (addressArray) => {
      let departement = '';
      for(let index = 0; index < addressArray.length; index++){
        if(addressArray[index].types[0] && 'administrative_area_level_2' === addressArray[index].types[0]){
        departement = addressArray[index].long_name;
        return departement;
      }
  }
  }
  
  getville = (addressArray) => {
    let ville = '';
    for(let index = 0; index < addressArray.length; index++){
      if(addressArray[index].types[0]){
      for (let j = 0; j < addressArray.length; j++){
        if('sublocality_level_1' === addressArray[index].types[j] || 'locality' === addressArray[index].types[j]){
          ville = addressArray[index].long_name;
          return ville;
        }
      }
      }
    }
  }
  
  getState = (addressArray) => {
    let région = '';
    for (let index = 0; index < addressArray.length; index++) {
      for (let index = 0; index < addressArray.length; index++) {
        if(addressArray[index].types[0] && 'administrative_area_level_1' === addressArray[index].types[0]){
          région = addressArray[index].long_name;
          return région
        }
      }
    }
  
  
  }
  
  
  
  
  onMarkerDragEnd = (event) => {
  
    let newLat = event.latLng.lat();
    let newLng = event.latLng.lng();
  
    Geocode.fromLatLng(newLat, newLng)
    .then(response => {
    console.log('response', response)
    const adresse = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          departement = this.getdepartement(addressArray),
          ville = this.getville(addressArray),
          région = this.getState(addressArray)  
    
          this.setState({
            adresse: (adresse) ? adresse : "",
            ville: (ville) ? ville : "",
            departement: (departement) ? departement : "",
            région: (région) ? région: "",
            markerPosition: {
              lat: newLat,
              lng: newLng
            },
            mapPosition: {
              lat: newLat,
              lng : newLng
            },
    
          })
    
    })
  
  
  
  
  
  
  
  }
  
  onPlaceSelected=(place) => {
  const adresse = place.formatted_address,
      addressArray = place.address_components,
      departement = this.getdepartement(addressArray),
      ville = this.getville(addressArray),
      région = this.getState(addressArray),
      newLat = place.geometry.location.lat(),
      newLng = place.geometry.location.lng();
  
      this.setState({
        adresse: (adresse) ? adresse : "",
        ville: (ville) ? ville : "",
        departement: (departement) ? departement : "",
        région: (région) ? région: "",
        markerPosition: {
          lat: newLat,
          lng: newLng
        },
        mapPosition: {
          lat: newLat,
          lng : newLng
        },
  
      })
  
  }
  
    render(){
  
      const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
        >
          <Marker
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
          >
            <InfoWindow >
  <div>
  Hello
  </div>
  
            </InfoWindow>
            </Marker>
  
  < Autocomplete
  
  style={{ width: "100%", height: '40px', paddingLeft: 16, marginTop: 2, marginBottom: '2rem'}}
  types={['(regions)']}
  onPlaceSelected={(this.onPlaceSelected) }
  />
  
  
  
        </GoogleMap>
      ));
  
  
      return (
  
        <div style={{padding: '1rem', margin: '0 auto', maxWidth: 1000}}>
  
        
          <Descriptions bordered>
          <Descriptions.Item label="departement">{this.state.departement}</Descriptions.Item>
          <Descriptions.Item label="ville">{this.state.ville}</Descriptions.Item>
          <Descriptions.Item label="région">{this.state.région}</Descriptions.Item>
          <Descriptions.Item label="adresse">{this.state.adresse}</Descriptions.Item>
      
     
    </Descriptions>
      
  
  
  
  
  
  
  
  
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1T1CU6roR7kuWtE_NGNuC6gYXFOBt2Uk&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
  </div>
    );
  
  }
  }export default Map;