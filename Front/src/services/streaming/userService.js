import axios from "../config";

const userServices = () => {
  const getUsers = () => {
    return axios({
      method: "GET",
      url: "/mostrar",
    });
  };

  const addUser = (user) => {
    return axios({
      method: "POST",
      url: "/registrar",
      data: user,
    });
  };

  const deleteUser = (id) => {
    return axios({
      method: "DELETE",
      url: `/eliminar/${id}`,
    });
  };

  const updateUser = (id, user) => {
    return axios({
      method: "PUT",
      url: `/actualizar/${id}`,
      data: user,
    });
  };

  return {
    getUsers,
    addUser,
    deleteUser,
    updateUser,
  };
};

export default userServices();
