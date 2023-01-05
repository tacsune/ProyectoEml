export const LOADING = "view/LOADING";
export const LOADED = "view/LOADED";

export const loading_action = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
};

export const loaded_action = () => async (dispatch) => {
  dispatch({
    type: LOADED,
  });
};
