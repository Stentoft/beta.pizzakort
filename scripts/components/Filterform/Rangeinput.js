import React from 'react';

export default class Rangeinput extends React.Component {
  handleChange(e) {
    const rangeScore = Math.floor(e.target.value/10);
    this.props.rangeScore != rangeScore && this.props.changeRangeScore(rangeScore);
  }

  decreaseScore(){
    const decreasedScore = this.props.rangeScore > 0 ? this.props.rangeScore-1 : 0;
    this.props.changeRangeScore(decreasedScore);
  }

  increaseScore(){
    const decreasedScore = this.props.rangeScore < 10 ? this.props.rangeScore+1 : 10;
    this.props.changeRangeScore(decreasedScore);
  }

  render () {
    return (
      <div class="filter-form-item">
        <label class="filter-form-item__label" for="point-range">Minimum score:</label><br/>
        <input class="filter-form-item--range" type="range" id="point-range" name="" onChange={this.handleChange.bind(this)} value={this.props.rangeScore*10} />
        <div class="range-display">
          <span class="range-display__value">{this.props.rangeScore}</span>
          <i class={`range-display__value-btn range-display__value-btn--up ${this.props.rangeScore == 10 ? 'disabled' : '' }`} onClick={this.increaseScore.bind(this)}></i>
          <i class={`range-display__value-btn range-display__value-btn--down ${this.props.rangeScore == 0 ? 'disabled' : '' }`} onClick={this.decreaseScore.bind(this)}></i>
        </div>
      </div>
    );
  }
}
