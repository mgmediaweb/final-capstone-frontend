/* eslint linebreak-style: ["error", "windows"] */
const url = 'https://elsonotake-backend.herokuapp.com/api/v1/vehicles';

// actions

const GET_VEHICLES = 'redux/vehicles/vehicles/GET_VEHICLES';

// reducer

export default function vehiclesReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_VEHICLES:
      return action.payload;
    default:
      return state;
  }
}

//  actions

function getVehicles() {
  return async (dispatch) => {
    const response = await fetch(url);
    const vehicles = await response.json();
    dispatch({
      type: GET_VEHICLES,
      payload: vehicles,
    });
  };
}

export { getVehicles };
