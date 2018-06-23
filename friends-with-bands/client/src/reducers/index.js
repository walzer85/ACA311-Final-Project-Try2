import { combineReducers } from "redux";

// The function for what to load on MUSICIANS_LOADED
function musicians(state=[], action){
  if(action.type = "MUSICIANS_LOADED"){
    return action.value;
  }
  return state;
}

// The function for what to load on REQUESTS_LOADED
function requests(state=[], action){
  if(action.type = "REQUESTS_LOADED"){
    return action.value;
  }
  return state;
}

function manageMusicians(state =[], action){
  if(action.type === "ADD_MUSICIAN"){
    return [...state,action.value];
  }
  // Don't add this in until I create accounts for people
  // if(action.type === "REMOVE_MUSICIAN"){
  //   return state.slice(state.length-1);
  // }
  return state;
}

function manageRequests(state =[], action){
  if(action.type === "ADD_REQUESTS"){
    return [...state,action.value];
  }
  // Don't add this in until I create accounts for people
  // if(action.type === "REMOVE_REQUEST"){
  //   return state.slice(state.length-1);
  // }
  return state;
}



const rootReducer = combineReducers({
  musicians, requests, manageMusicians, manageRequests
})

export default rootReducer;

