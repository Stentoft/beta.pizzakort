import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemDetailsGoogleMap extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    const reactDomnodeMap = ReactDOM.findDOMNode(this.map);

    let geocoder;
    let map;
    let address = this.props.config.custom_fields.address[0];

    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { address }, function(results, status) {
      if (status == 'OK') {
      let mapOptions = {
        zoom: 18,
        center: results[0].geometry.location,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,

        // styles: [
        //     {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        //     {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        //     {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        //     {
        //       featureType: 'administrative.locality',
        //       elementType: 'labels.text.fill',
        //       stylers: [{color: '#d59563'}]
        //     },
        //     {
        //       featureType: 'road',
        //       elementType: 'geometry',
        //       stylers: [{color: '#38414e'}]
        //     },
        //     {
        //       featureType: 'road',
        //       elementType: 'geometry.stroke',
        //       stylers: [{color: '#212a37'}]
        //     },
        //     {
        //       featureType: 'road',
        //       elementType: 'labels.text.fill',
        //       stylers: [{color: '#9ca5b3'}]
        //     }
        //   ]
      }
      map = new google.maps.Map(reactDomnodeMap, mapOptions);

      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  render () {

    return (
      <div ref={(map) => { this.map = map; }} class="item-details-map" id={`${this.props.config.slug}-map`}></div>
    );
  }
}
