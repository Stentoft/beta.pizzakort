import React from 'react';
import MapStore from '../stores/mapStore';
import * as MapActions from '../actions/MapActions'


export default class ListSorting extends React.Component {
  constructor() {
    super();
    this.state = {
      sortByScore: MapStore.getIsSortingByScore(),
      sortingReversed : MapStore.getIsSortingReversed()
    }
  }

  componentWillMount(){
    MapStore.on('change', () => {
      this.setState({
        sortByScore: MapStore.getIsSortingByScore(),
        sortingReversed : MapStore.getIsSortingReversed()
      })
    })
  }

  // #TODO saml de to sortby...() functioner til en.

  sortByScore(e) {
    MapActions.updateListSorting({
      sortByScore : true,
      sortingReversed : this.state.sortByScore && !this.state.sortingReversed
    });
  }

  sortByName(e) {
    MapActions.updateListSorting({
      sortByScore : false,
      sortingReversed : !this.state.sortByScore && !this.state.sortingReversed
    });
  }

  render () {
    return (
      <div className={`list-sorting ${this.props.className}`} >
          <button className={'list-sorting-btn ' + (this.state.sortByScore ? '' : 'list-sorting-btn--active ') + (this.state.sortingReversed ? 'sorting-reversed' : '')} value="false" onClick={this.sortByName.bind(this)}>Aa</button>
          <button className={'list-sorting-btn ' + (this.state.sortByScore ? 'list-sorting-btn--active ' : '') + (this.state.sortingReversed ? 'sorting-reversed' : '')} value="true" onClick={this.sortByScore.bind(this)}>Score</button>
      </div>
    );
  }
}
