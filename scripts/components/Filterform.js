import React from 'react';
import Checkbox from './Filterform/Checkbox';
import FilterStore from '../stores/filterStore';
import * as FilterActions from '../actions/FilterActions'
import Rangeinput from './Filterform/Rangeinput';


export default class Filterform extends React.Component {
  constructor() {
    super();
    this.state = {
      rangeScore: FilterStore.getRangeScore(),
      bringsOut: FilterStore.getBringsOut(),
      hasSeats: FilterStore.getHasSeats(),
    }
  }

  componentWillMount(){
    FilterStore.on('change', () => {
      this.setState({
        rangeScore: FilterStore.getRangeScore(),
        bringsOut: FilterStore.getBringsOut(),
        hasSeats: FilterStore.getHasSeats(),
      })
    })
  }

  changeRangeScore(rangeScore){
    FilterActions.updateRangeScore(rangeScore);
  }

  changeBringsOut(){
    FilterActions.updateBringsOut();
  }

  changeHasSeats(){
    FilterActions.updateHasSeats();
  }

  render () {
    return (
      <div class="filter-form-wrapper">
        <form class="filter-form">
          <Rangeinput changeRangeScore={this.changeRangeScore.bind(this)} rangeScore={this.state.rangeScore}/>
          <Checkbox changeVal={this.changeBringsOut.bind(this)} id="bringing-out" val={this.state.bringsOut} labelText="Bringer ud:"/>
          <Checkbox changeVal={this.changeHasSeats.bind(this)} id="seats" val={this.state.hasSeats} labelText="Siddeplads:"/>
        </form>
      </div>
    );
  }
}
