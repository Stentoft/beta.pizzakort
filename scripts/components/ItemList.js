import FilterStore from '../stores/filterStore';
import MapItem from './ItemList/MapItem';
import MapStore from '../stores/mapStore';
import ListSorting from './ListSorting';
import React from 'react';

export default class ItemList extends React.Component {
  constructor(){
    super();
    this.state = {
      mapLoading: true,
      mapItems : [],
      listMode: MapStore.getListMode(),
      filteredItems : [],
      rangeScore: FilterStore.getRangeScore(),
      bringsOut: FilterStore.getBringsOut(),
      hasSeats: FilterStore.getHasSeats(),
    }
  }

  componentWillMount(){
    MapStore.on('change', () => {
      const { posts } = MapStore.getMapList();
      const mapItems = posts.map( (e) => {
        return (
          <MapItem config={e} key={e.title}/>
        )
      })
      this.setState({
        mapItems,
        listMode: MapStore.getListMode(),
       }, this.filterMapItems)
    })

    FilterStore.on('change', () => {
      this.setState({
        rangeScore: FilterStore.getRangeScore(),
        bringsOut: FilterStore.getBringsOut(),
        hasSeats: FilterStore.getHasSeats(),
      }, this.filterMapItems)
    })
  }

  filtering(item){
    const { props } = item;
    const { config } = props;
    const { custom_fields } = config;
    const { bringsOut } = custom_fields;
    const { hasSeats } = custom_fields;
    const { score } = custom_fields;

    if(JSON.parse(score[0]) >= this.state.rangeScore){
      if(this.state.bringsOut && JSON.parse(bringsOut[0]) != this.state.bringsOut){
        return false
      } else if(this.state.hasSeats && JSON.parse(hasSeats[0]) != this.state.hasSeats){
        return false
      }
      return true;
    }
    return false;
  }

  sortByName(a,b){
    var nameA = a.props.config.title.toUpperCase();
    var nameB = b.props.config.title.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

  sortByScore(a,b){
    return  b.props.config.custom_fields.score - a.props.config.custom_fields.score;
  }

  filterMapItems(){
    const filteredItems = this.state.mapItems.filter(this.filtering.bind(this)); // this.loopFilterMapItems();

    MapStore.getIsSortingByScore() && filteredItems.sort(this.sortByScore) || filteredItems.sort(this.sortByName);
    MapStore.getIsSortingReversed() && filteredItems.reverse();

    this.setState({ filteredItems })
  }

  // loopFilterMapItems(){
  //   let filteredItems = this.state.mapItems;
  //   let i = 0;
  //   let loopItems = ()=>{
  //     setTimeout(()=>{
  //       let itemPass = this.filtering(filteredItems[i]);
  //       !itemPass && filteredItems.splice(i,1);
  //       i++;
  //       console.log("loop, i:", i);
  //       i < filteredItems.length && this.setState({ filteredItems }, loopItems);
  //     }, 200);
  //   }
  //   loopItems();
  // }

  render () {
    return (
      <div className={"map " + (this.state.listMode ? "list-layout" : "map-layout")}>
        <ListSorting />
        <ul className={"map-items "}>
          {this.state.filteredItems.length ? this.state.filteredItems : "No pizzas places class // TODO"}
        </ul>
      </div>
    );
  }
}
