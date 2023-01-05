import clientServices from "../services/streaming/userService";

export const LOADING = "user/LOADING";

export const ADD_USER = "user/ADD_CLIENT";
export const GET_USERS = "user/GET_USERS";
export const DELETE_USER = "user/DELETE_USER";
export const UDPATE_USER = "user/UDPATE_USER";

export const loading = () => ({ type: LOADING });

export const add_user = (user) => async (dispatch) => {
  dispatch(loading());
  try {
    await clientServices.addUser(user).then(function (response) {
      dispatch({
        type: ADD_USER,
        payload: response.data,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

export const get_users = () => async (dispatch) => {
  dispatch(loading());
  try {
    await clientServices.getUsers().then(function (response) {
      dispatch({
        type: GET_USERS,
        payload: Object.values(response.data),
      });
    });
  } catch (error) {
    console.error(error);
  }
};

export const delete_user = (id) => async (dispatch) => {
  dispatch(loading());
  try {
    await clientServices.deleteUser(id).then(function () {
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

export const update_user = (id, user) => async (dispatch) => {
  dispatch(loading());
  try {
    await clientServices.updateUser(id, user).then(function (response) {
      dispatch({
        type: UDPATE_USER,
        payload: response.data,
      });
    });
  } catch (error) {
    console.error(error);
  }
};
