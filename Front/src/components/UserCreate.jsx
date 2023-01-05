import React, { useState } from "react";
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
import { add_user } from "../actions/userAction";

const UserCreate = ({ add_user }) => {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Card className="my-3">
      <CardHeader className="text-center">
        <h4>Registro de nuevo usuario</h4>
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
          color="success"
          onClick={() => {
            add_user({
              nombres: name,
              apellidos: lastName,
              telefono: phone,
              email: email,
            });
          }}>
          Crear usuario
        </Button>
      </CardFooter>
    </Card>
  );
};

const mapDispatchToProps = {
  add_user,
};

export default connect(null, mapDispatchToProps)(UserCreate);
