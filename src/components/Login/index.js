import React from "react";
import { auth, provider, db } from "../../services/firebase";
import * as C from "./styles";
import { TextField, Button } from "@mui/material";
import Logo from "../../static/logo_semfundo.png"
import { useState } from "react";
import uuid from "react-uuid";
import Default from "../Default";
import Loading from "../Loading";

const Login = () => {

  const [email, setEmail] = useState(null);

  const idUser = uuid();

  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const createAccountManuel = () => {
    db.collection("users").doc(idUser).set({
      email: email
    })
    return <Loading />
  }

  return (
    <C.Container>
      <C.Logo src={Logo} />
      <C.Span>Crie sua conta ou Acesse uma já existente</C.Span>
      <C.Button onClick={handleSignin}>Login com Google</C.Button>
      <C.Span>Ou</C.Span>
      <TextField id="outlined-basic" onChange={handleChange} label="Email" variant="outlined" />

      <C.Button onClick={createAccountManuel}>Acessar</C.Button>
    </C.Container>
  );
};

export default Login;