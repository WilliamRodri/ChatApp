import React, { useState } from "react";
import * as C from "./styles";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, TextField, DialogActions } from "@mui/material";

const SidebarHeader = ({ setUserChat }) => {

  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  const handleCreateChat = () => {
    const emailInput = email;
    console.log(emailInput)

    if (!emailInput) return;

    if (!EmailValidator.validate(emailInput)) {
      return toast.warning("E-mail inválido!", { position: toast.POSITION.BOTTOM_LEFT });
    } else if (emailInput === user.email) {
      return toast.warning("Insira um e-mail diferente do seu!", { position: toast.POSITION.BOTTOM_LEFT });
    } else if (chatExists(emailInput)) {
      return toast.error("Chat já existe!", { position: toast.POSITION.BOTTOM_LEFT });
    }

    const res = db.collection("chats").add({
      users: [user.email, emailInput],
    });

    setEmail("");
    setOpen(false);

    if (!res) return toast.error("Não foi possivel criar esse chat", {
      position: toast.POSITION.BOTTOM_LEFT
    });

    return toast.success("Chat Criado!", {
      position: toast.POSITION.BOTTOM_LEFT
    });
  };

  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleKeyEnter = (event) => {
    if (event.key === 'Enter') {
      handleCreateChat();
    }
  }

  

  return (
    <C.Container>
      <C.Avatar src={user?.photoURL} />
      <C.Options>
        <MdDonutLarge />

        <Button><MdChat onClick={handleClickOpen} /></Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Digite o email do usuario que deseja conversa.</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Ex. usuario@email.com"
              type="email"
              onChange={handleChange}
              value={email}
              fullWidth
              onKeyPress={handleKeyEnter}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleCreateChat}>Adicionar</Button>
          </DialogActions>
        </Dialog>

        <div class="dropdown btn-group shadow-0">
          <MdMoreVert type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <C.Li><a class="dropdown-item" href="#">Criar Grupo</a></C.Li>
            <C.Li><button class="dropdown-item">Mudar Tema</button></C.Li>
            <C.Li><a class="dropdown-item" onClick={() => [auth.signOut(), setUserChat(null)]}>Desconectar</a></C.Li>
          </ul>
        </div>

      </C.Options>
    </C.Container>
  );
};

export default SidebarHeader;