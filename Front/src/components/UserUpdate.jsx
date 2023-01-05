import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
} from "reactstrap";
import { update_user } from "../actions/userAction";

const UserUpdate = ({ userEdit, setShow, update_user }) => {
  const [user, setUser] = useState(userEdit);
  const [name, setName] = useState(userEdit?.nombres);
  const [lastName, setLastname] = useState(userEdit?.apellidos);
  const [phone, setPhone] = useState(userEdit?.telefono);
  const [email, setEmail] = useState(userEdit?.email);

  useEffect(() => {
    setUser(userEdit);
    setName(userEdit?.nombres);
    setLastname(userEdit?.apellidos);
    setPhone(userEdit?.telefono);
    setEmail(userEdit?.email);
  }, [user?.nombres, userEdit]);

  return (
    <Card className="my-3">
      <CardHeader className="text-center">
        <h4>Actualización de usuario id: {user?.id}</h4>
      </CardHeader>
      <CardBody>
        <Label>Nombres</Label>
        <Input
          className="mw-100"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Label>Apellidos</Label>
        <Input
          className="mw-100"
          value={lastName}
          onChange={(event) => {
            setLastname(event.target.value);
          }}
        />
        <Label>Telefono</Label>
        <Input
          className="mw-100"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <Label>Email</Label>
        <Input
          className="mw-100"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </CardBody>
      <CardFooter>
        <Button
          block
          color="primary"
          onClick={() => {
            update_user(user.id, {
              nombres: name,
              apellidos: lastName,
              telefono: phone,
              email: email,
            });
            setShow(false);
          }}>
          Actualizar usuario
        </Button>
      </CardFooter>
    </Card>
  );
};

const mapDispatchToProps = {
  update_user,
};

export default connect(null, mapDispatchToProps)(UserUpdate);
