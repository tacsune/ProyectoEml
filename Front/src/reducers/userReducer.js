import {
  LOADING,
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  UDPATE_USER,
} from "../actions/userAction";

const INITIAL_STATE = {
  users: [],
  loading: false,
};

const invoice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case GET_USERS: {
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    }
    case ADD_USER: {
      let newUsers = state.users;
      newUsers.push(action.payload);
      return {
        ...state,
        loading: false,
        users: newUsers,
      };
    }
    case DELETE_USER: {
      let newUsers = state.users.filter((user) => user.id !== action.payload);
      return {
        ...state,
        loading: false,
        users: newUsers,
      };
    }

    case UDPATE_USER: {
      let newUsers = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      return {
        ...state,
        loading: false,
        users: newUsers,
      };
    }
    default:
      return state;
  }
};

export default invoice;
