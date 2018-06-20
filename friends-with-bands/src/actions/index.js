//switch these to loadMusicians and loadRequests

export function loadUsers() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_USERS"
    });
    fetch("/users")
    .then( (response) => {
      return response.json();
    }).then((users) => {
      dispatch(usersLoaded(users));
    });
  };
}

export function usersLoaded(users) {
  return {
    type: "USERS_LOADED",
    value: users
  };
}


//loadRequests
export function loadUsers() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_USERS"
    });
    fetch("/users")
    .then( (response) => {
      return response.json();
    }).then((users) => {
      dispatch(usersLoaded(users));
    });
  };
}
export function usersLoaded(users) {
  return {
    type: "USERS_LOADED",
    value: users
  };
}