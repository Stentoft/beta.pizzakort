import dispatcher from "../dispatcher";

export function updateRangeScore(posts){
  dispatcher.dispatch({type:"UPDATE_MAPLIST", posts})
}

export function updateListMode(){
  dispatcher.dispatch({type:"UPDATE_LISTMODE"})
}

export function updateListSorting(config){
  dispatcher.dispatch({type:"UPDATE_LISTSORTING", config})
}
