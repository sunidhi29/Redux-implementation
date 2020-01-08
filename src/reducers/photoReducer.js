const initialState = {
  photos_data: [],
  user_data: [],
  show_state:[],
  login: {},
  show_district: [],
  get_child: {},
  add_data:[]
};

export function unsplashReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case "GET_INFO":
      return newState;
    case "GET_INFO_SUCCESS":
      newState.login = { ...action.data }
    case "GET_STATE":
      return newState;
    case "GET_STATE_SUCCESS":
      newState.show_state = action.data;
      return newState;
    case "ADD_STATE":
      return newState;
    case "ADD_STATE_SUCCESS":
      return newState;
    case "GET_DISTRICT":
      return newState;
    case "GET_DISTRICT_SUCCESS":
      newState.show_district = action.data;
      return newState;
    case "ADD_DISTRICT":
      return newState;
    case "ADD_DISTRICT_SUCCESS":
      return newState;
    case "GET_CHILD":
      return newState;
    case "GET_CHILD_SUCCESS":
      newState.get_child = { ...action.data };
      return newState;
    case 'ADD_DATA':
      return newState;
    case 'ADD_DATA_SUCCESS':
      return newState;
    default:
      return newState;
  }
}
