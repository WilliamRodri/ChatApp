import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../services/firebase";
import * as C from './styles';
import { useCollection } from "react-firebase-hooks/firestore";
import SideBarChatsItem from "../SideBarChatsItem";


const SideBarChats = ({ setUserChat, userChat }) => {

  const [user] = useAuthState(auth);

  const refChat = db.collection("chats").where("users", "array-contains", user.email);

  const [chatSnapshot] = useCollection(refChat);

  return (
    <C.Container>
      {chatSnapshot?.docs.map((item, index) => (
        <C.Content>
          <SideBarChatsItem 

            id={item.id}
            users={item.data().users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id ? "Active" : ""}
            chatId={userChat?.chatId}
          
          />
        </C.Content>
      ))}
    </C.Container>
  );
};

export default SideBarChats