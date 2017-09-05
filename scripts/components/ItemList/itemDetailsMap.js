import React from 'react';
import ReactDOM from 'react-dom';
import ItemDetailsGoogleMap from './ItemDetailsGoogleMap';

export default class ItemDetailsMap extends React.Component {
  constructor(){
    super();

    this.state = {
      showMap : false
    }
  }

  toggleMap(){
    this.setState({
      showMap : !this.state.showMap
    })
  }

  render () {

    return (
      <div class="item-info">
        <div class="item-info-text">
          <div class="item-info-text-wrapper">
            <h4 class="item-phone-number">{ this.props.config.custom_fields.phone }</h4>
            <h4 class="item-address">{ this.props.config.custom_fields.address }</h4>
          </div>
          <button class="show-map-button" onClick={this.toggleMap.bind(this)}>{ !this.state.showMap ? "Vis på kort" : "Skjul kort" }</button>
        </div>
        { this.state.showMap &&
          <div class="item-details-map-wrapper">
            <ItemDetailsGoogleMap config={this.props.config} />
          </div>
        }
      </div>
    );
  }
}
