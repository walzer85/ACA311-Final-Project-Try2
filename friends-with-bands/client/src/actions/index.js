// This is the iniitial call to the database to get the json of submitted musicians
export function loadMusicians() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_MUSICIANS"
    });
    fetch("/musicians")
    .then( (response) => {
      return response.json();
    }).then((musicians) => {
      dispatch(musiciansLoaded(musicians));
    });
  };
}

// Called after the fetch for musicians is complete
export function musiciansLoaded(musicians) {
  return {
    type: "MUSICIANS_LOADED",
    value: musicians
  };
}

// called onSubmit when adding a musician
export function addMusician(musician){
  return {
    type: "ADD_MUSICIAN",
    value: musician
  };
}

// Don't add this in until I create accounts for people
// export function removeMusician(){
//   return {
//     type: "REMOVE_MUSICIAN",
//   };
// }



// This is the iniitial call to the database to get the json of submitted requests
export function loadRequests() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_REQUESTS"
    });
    fetch("/requests")
    .then( (response) => {
      return response.json();
    }).then((requests) => {
      dispatch(usersLoaded(requests));
    });
  };
}

// Called after the fetch for requests is complete
export function requestsLoaded(requests) {
  return {
    type: "REQUESTS_LOADED",
    value: requests
  };
}

// Called onSubmit when adding a request
export function addRequest(request){
  return {
    type:"ADD_REQUEST",
    value: request
  };
}
// Don't add this in until I create accounts for people
// export function removeRequest(){
//   return {
//     type:"REMOVE_REQUEST"
//   };
// }