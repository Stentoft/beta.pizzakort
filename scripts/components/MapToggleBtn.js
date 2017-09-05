import React from 'react';
import MapStore from '../stores/mapStore';
import * as MapActions from '../actions/MapActions'
import { BrowserRouter, Link } from 'react-router-dom'


export default class MapToggleBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      listMode: MapStore.getListMode(),
    }
  }

  componentWillMount(){
    MapStore.on('change', () => {
      this.setState({
        listMode: MapStore.getListMode(),
      })
    })
  }

  handleClick(e) {
    const val = e.target.value == 'list';
    const diff = val != this.state.listMode;
    diff && MapActions.updateListMode();
  }

  render () {
    return (
      <div className={`map-toggle ${this.props.className}`} >
          <button disabled className={'map-toggle-btn ' + (this.state.listMode ? '' : 'map-toggle-btn--active')} value="map" onClick={this.handleClick.bind(this)}>Kort</button>
          <button className={'map-toggle-btn ' + (this.state.listMode ? 'map-toggle-btn--active' : '')} value="list" onClick={this.handleClick.bind(this)}>Liste</button>
      </div>
    );
  }
}
