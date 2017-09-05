import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Filterform from './Filterform';
import Header from './Header';
import ItemList from './ItemList';
import PizzaMap from './Map';
import MapToggleBtn from './MapToggleBtn';

export default class Layout extends React.Component {
  render () {
    return (
      <div class="pizza-page">
        <div class="filtering">
          <MapToggleBtn />
          <Filterform />
        </div>
        <ItemList />

        { false &&
          <div>
            <Route path="/" component={PizzaMap} />
            <Route path="/list" component={ItemList} />
          </div>
        }
      </div>
    );
  }
}
