import React from 'react';
import ItemDetails from './ItemDetails';
import ItemDetailsMap from './ItemDetailsMap';

export default class MapItem extends React.Component {
  constructor(){
    super();
    this.state = {
      showDetails : false
    }
  }

  toggleDetails(){
    this.setState({
      showDetails : !this.state.showDetails
    });
  }

  render () {

    const description = this.props.config.content;
    function createMarkup(){return {__html: description};};

    return (
      <li class="map-item">
        <div class="item-content">
          <div class="item-text">
            <h2 class="item-header">{this.props.config.title}</h2>
            <p class="item-description" dangerouslySetInnerHTML={createMarkup()}></p>
          </div>
          <h3 class="item-score">{this.props.config.custom_fields.score}</h3>
        </div>

        { this.state.showDetails && <ItemDetailsMap config={this.props.config} /> }

        { this.state.showDetails && <ItemDetails config={this.props.config.custom_fields}/> }

        <div class="map-item__showmo" onClick={this.toggleDetails.bind(this)}>
        { this.state.showDetails ? "Skjul detaljer" : "Vis detaljer" }
        </div>

        { false && <div class="map-item__showmo-icon"></div> }
      </li>
    );
  }
}
