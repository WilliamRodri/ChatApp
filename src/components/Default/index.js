import React from 'react'
import * as C from "./styles";
import Logo from "../../static/logo_semfundo.png";
const Default = () => {
  return (
    <C.Container>
        <C.Logo src={Logo} />
        <C.Info>
            Agora você pode envia e receber mensagens online!
        </C.Info>
    </C.Container>
  );
};

export default Default;