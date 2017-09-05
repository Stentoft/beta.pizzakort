import dispatcher from "../dispatcher.js";
import { EventEmitter } from "events";
import { httpService } from '../services/httpservice.js';


class MapStore extends EventEmitter {
  constructor() {
    super();
    this.mapList = [];
    this.listMode = true;
    this.setMapList();
    this.sortByScore = true;
    this.sortingReversed = false;
  }

  getListMode(){
    return this.listMode;
  }

  getMapList(){
    return this.mapList;
  }

  getIsSortingByScore(){
    return this.sortByScore;
  }

  getIsSortingReversed(){
    return this.sortingReversed;
  }

  setListMode(){
    this.listMode = !this.listMode;
    this.emit("change");
  }
  //  httpService.get('http://aarhuspizzakort.dk/?json=get_posts&count=1000').then(

  setMapList(){
    httpService.get('http://beta.aarhuspizzakort.dk/?json=get_posts&count=1000').then(
      (res)=>{
        let data = JSON.parse(res);
        this.mapList = data;
        console.log("this.mapList",this.mapList);
        this.emit("change");
    });
  }

  setSorting(config){
    this.sortByScore = config.sortByScore;
    this.sortingReversed = config.sortingReversed;
    this.emit("change");
  }

  handleActions(action){
    switch (action.type) {
      case "UPDATE_MAPLIST": {
        this.setMapList(action.posts);
      } break;
      case "UPDATE_LISTMODE": {
        this.setListMode();
      } break;
      case "UPDATE_LISTSORTING": {
        this.setSorting(action.config);
      } break;
    }
  }
}

const mapStore = new MapStore;
dispatcher.register(mapStore.handleActions.bind(mapStore));

export default mapStore;
