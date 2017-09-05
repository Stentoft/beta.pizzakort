import React from 'react';

export default class Checkbox extends React.Component {

  handleChange(){
    this.props.changeVal()
  }

  render () {
    return (
      <div class="filter-form-item">
        <label class="filter-form-item__label" htmlFor={this.props.id}>{this.props.labelText}</label>
        <input type="checkbox" id={this.props.id} checked={this.props.val}  onChange={this.handleChange.bind(this)}/>
        <label class="filter-form-checkbox" htmlFor={this.props.id}></label>
      </div>
    );
  }
}
