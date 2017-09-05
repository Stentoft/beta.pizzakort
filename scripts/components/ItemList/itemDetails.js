import React from 'react';
import ItemDetailLine from './ItemDetailLine';

export default class ItemDetails extends React.Component {
  render () {
    return (
      <div class="item-details">
        <ul>
          <ItemDetailLine header="Bund:" value={this.props.config.bundScore}/>
          <ItemDetailLine header="Ost:" value={this.props.config.ostScore}/>
          <ItemDetailLine header="Sauce:" value={this.props.config.sauceScore}/>
          <ItemDetailLine header="Fyld:" value={this.props.config.fyldScore}/>
          <ItemDetailLine header="Udvalg:" value={this.props.config.udvalgScore}/>
          <ItemDetailLine header="Pris:" value={this.props.config.prisScore}/>
          <ItemDetailLine header="M/U oregano:" value={this.props.config.origano}/>
          <ItemDetailLine header="Udskåret:" value={this.props.config.udskaaret}/>
          <ItemDetailLine header="Service:" value={this.props.config.service}/>
          <ItemDetailLine header="X-Factor:" value={this.props.config.xFactor}/>
          <ItemDetailLine header="Smager den godt kold:" value={this.props.config.godKold}/>

        </ul>
      </div>
    );
  }
}
