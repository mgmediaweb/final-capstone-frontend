/* eslint linebreak-style: ["error", "windows"] */
const url = 'https://elsonotake-exo-cars.onrender.com/api/v1/vehicles';

// actions

const GET_VEHICLES = 'redux/vehicles/vehicles/GET_VEHICLES';

// reducer

const vehiclesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_VEHICLES:
      return action.payload;
    default:
      return state;
  }
};

//  actions

const getVehicles = () => async (dispatch) => {
  const requestParameters = {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('current_user')).token,
    },
  };
  const response = await fetch(url, requestParameters);
  const vehicles = await response.json();
  dispatch({
    type: GET_VEHICLES,
    payload: vehicles,
  });
};

export { getVehicles, vehiclesReducer };
