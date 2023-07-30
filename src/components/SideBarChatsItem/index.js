import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../services/firebase";
import * as C from "./styles";
import { MdPerson } from "react-icons/md";
import { Dropdown, Menu } from 'antd';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0];

const SidebarChatsItem = ({ id, users, user, setUserChat, active, chatId }) => {
  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", getUser(users, user))
  );

  const [deleteIdMessage, setDeleteIdMessage] = React.useState(null);

  const clickSetIdMessage = async () => {
    const userSelect = {
      user: id
    };
    setDeleteIdMessage(userSelect);

    const res = db.collection("chats").doc(userSelect.user).delete();
    if (!res) return toast.error("Não foi possivel deletar a conversa", {
      position: toast.POSITION.BOTTOM_LEFT
    });

    return toast.success("Conversa deletada!", {
      position: toast.POSITION.BOTTOM_LEFT
    });

  }

  const Avatar = getUserItem?.docs?.[0]?.data();
  const item = getUser(users, user);

  const handleNewChat = () => {

    const userChat = {
      chatId: id,
      name: item.split("@")[0],
      photoURL: Avatar?.photoURL,
    };

    setUserChat(userChat);
  };

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: "Deletar Conversa",
          action: deleteIdMessage,
          onClick: clickSetIdMessage
        },
        {
          key: '2',
          label: "Arquivar Conversa"
        },
        {
          key: '3',
          label: "Fixar Conversa"
        },
      ]}
    >
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["contextMenu"]} >
      <div>
        <C.Container onClick={handleNewChat} className={active}>
          {Avatar ? <C.Avatar src={Avatar?.photoURL} /> : <MdPerson />}
          <C.Name>{item.split("@")[0]}</C.Name>
        </C.Container>
      </div>
    </Dropdown>
  );
};

export default SidebarChatsItem;