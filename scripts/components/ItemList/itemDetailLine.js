import React from 'react';

export default class ItemDetailLine extends React.Component {
  constructor(props){
    super(props);

    const itemScore = parseInt(this.props.value) || null;
    const itemScoreIsInt = Number.isInteger(itemScore) ? itemScore : false;

    this.state = {
      itemScore,
      itemScoreIsInt,
      itemScorePercentage : {width:0}
    }
  }

  componentWillMount(){
    setTimeout(()=>{
      this.setState({
        itemScorePercentage : this.state.itemScoreIsInt ? {width : parseFloat(this.props.value)*10+'%'} : null
      })
    },Math.random()*100);
  }

  render () {
    return (
      <li className={`item-details__line ${this.state.itemScoreIsInt && 'score-is-int' || ''}`}>
        <h4 class="item-details__header">{this.props.header}</h4>
        <p class="item-details__value">{this.props.value}</p>
        { this.state.itemScoreIsInt &&
          <div class="item-details__rating"><div class="item-details__rating-bar" style={this.state.itemScorePercentage}></div></div>
        }
      </li>
    );
  }
}
