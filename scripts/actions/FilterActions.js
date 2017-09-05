import dispatcher from "../dispatcher";

export function updateRangeScore(score){
  dispatcher.dispatch({type:"UPDATE_RANGESCORE", score})
}

export function updateBringsOut(val){
  dispatcher.dispatch({type:"UPDATE_BRINGSOUT", val})
}

export function updateHasSeats(val){
  dispatcher.dispatch({type:"UPDATE_HASSEATS", val})
}
