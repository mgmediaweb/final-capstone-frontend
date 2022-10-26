/* eslint linebreak-style: ["error", "windows"] */
const url = 'https://elsonotake-backend.herokuapp.com/api/v1/users';

// actions

const GET_RESERVATIONS = 'redux/users/users/GET_RESERVATIONS';

// reducer

export default function reservationsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
}

//  actions

function getReservations() {
  return async (dispatch) => {
    const requestParameters = {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('current_user')).token,
      },
    };
    const response = await fetch(`${url}/${JSON.parse(localStorage.getItem('current_user')).id}/bookings`, requestParameters);
    const reservations = await response.json();
    dispatch({
      type: GET_RESERVATIONS,
      payload: reservations,
    });
  };
}

export { getReservations };
