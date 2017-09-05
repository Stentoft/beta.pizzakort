import { EventEmitter } from "events";
import dispatcher from "../dispatcher.js";

class FilterStore extends EventEmitter {
  constructor() {
    super()
    this.rangeScore = 0;
    this.bringsOut = false;
    this.hasSeats = false;
  }

  // Range score
  getRangeScore(){
    return this.rangeScore;
  }

  setRangeScore(score){
    this.rangeScore = score;
    this.emit("change");
  }

  // Brings out
  getBringsOut(){
    return this.bringsOut;
  }

  setBringsOut(){
    this.bringsOut = !this.bringsOut;
    this.emit("change");
  }

  // Has Seats
  getHasSeats(){
    return this.hasSeats;
  }

  setHasSeats(){
    this.hasSeats = !this.hasSeats;
    this.emit("change");
  }

  handleActions(action){
    switch (action.type) {
      case "UPDATE_RANGESCORE": {
        this.setRangeScore(action.score);
      } break;
      case "UPDATE_BRINGSOUT": {
        this.setBringsOut(action.val);
      } break;
      case "UPDATE_HASSEATS": {
        this.setHasSeats(action.val);
      } break;
    }
  }
}

const filterStore = new FilterStore;
dispatcher.register(filterStore.handleActions.bind(filterStore));
window.dispatcher = dispatcher;

export default filterStore;
