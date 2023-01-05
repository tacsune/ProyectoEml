import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { get_users, delete_user } from "../actions/userAction";
import { Spinner } from "reactstrap";
import Table from "../components/Table";
import NavBar from "../components/NavBar";
import UserCreate from "../components/UserCreate";
import UserUpdate from "../components/UserUpdate";

const Users = ({ loading, users, getUsers, deleteUser }) => {
  const [search, setSearch] = useState("");
  const [showUserUpdate, setShowUserUpdate] = useState(false);
  const [userUpdate, setUserUpdate] = useState({});

  useEffect(() => {
    if (!users?.length) getUsers();
  }, [getUsers, users?.length]);

  function mapUsers(users) {
    return users?.map((user) => {
      return {
        accion: (
          <div className="d-grid gap-2 d-md-block">
            <button
              onClick={() => deleteUser(user.id)}
              className="btn btn btn-outline-danger btn-icon">
              <i className="fa fa-trash"></i>
            </button>
            <button
              onClick={() => {
                setShowUserUpdate(true);
                setUserUpdate(user);
              }}
              className="btn btn btn-outline-info btn-icon">
              <i className="fa fa-refresh"></i>
            </button>
          </div>
        ),
        id: user.id,
        nombres: user.nombres,
        apellidos: user.apellidos,
        telefono: user.telefono,
        email: user.email,
        fechaRegistro: user.created_at,
        fechaUltimaActualizacion: user.updated_at,
      };
    });
  }
  return (
    <div className="">
      <NavBar setSearch={setSearch} />
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <UserCreate />
          </div>

          {showUserUpdate ? (
            <div className="col-md-4">
              <UserUpdate setShow={setShowUserUpdate} userEdit={userUpdate} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="row">
        {loading && (
          <Spinner className="absolute-center" style={{ margin: "auto" }}>
            Loading...
          </Spinner>
        )}
        <div className="col">
          <Table
            columns={[
              { Header: "id", accessor: "id" },
              { Header: "Nombres", accessor: "nombres" },
              { Header: "Apellidos", accessor: "apellidos" },
              { Header: "Teléfono", accessor: "telefono" },
              { Header: "Email", accessor: "email" },
              { Header: "Fecha de registro", accessor: "fechaRegistro" },
              {
                Header: "Ultima actualización",
                accessor: "fechaUltimaActualizacion",
              },
              { Header: "Acción", accessor: "accion" },
            ]}
            data={
              search.length
                ? mapUsers(
                    users.filter((user) =>
                      search.length === 1
                        ? user.nombres.toLowerCase().charAt(0) === search
                        : user.nombres
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                  ).sort((a, b) => a.nombres.localeCompare(b.nombres))
                : mapUsers(users).sort((a, b) =>
                    a.nombres.localeCompare(b.nombres)
                  )
            }
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  users: state.user.users,
});

const mapDispatchToProps = {
  getUsers: get_users,
  deleteUser: delete_user,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
