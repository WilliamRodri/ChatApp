import React, { useEffect, useRef } from 'react'
import * as C from "./styles";
import { db } from "../../services/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "../Message";

const ChatBody = ({ chatId }) => {

  const [messageRes] = useCollection(
    db.collection("chats").doc(chatId).collection("messages").orderBy("timestamp", "asc")
  )

    const refBody = useRef("");

    useEffect(() => {
      if(refBody.current.scrollHeight > refBody.current.offsetHeight){
        refBody.current.scrollTop = refBody.current.scrollHeight - refBody.current.offsetHeight;
      }
    }, [messageRes]);

  return (
    <C.Container>
      {messageRes?.docs.map((message) => (
        <Message 
          key={message.id}
          user={message.data().user}
          message={{
            message: message.data().message,
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ))}
    </C.Container>
  )
}

export default ChatBody