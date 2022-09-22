import { FC } from "react";
import {  useSelector } from "react-redux";
import { useParams, Navigate } from 'react-router-dom'
import { ChatList } from "/src/components/ChatList";
import { Form } from "/src/components/Form";
import { MessageList } from "/src/MessageList/MessageList";
import { selectMessages } from "/src/store/messages/selectors";

  export const ChatPage: FC = () => {
    const { chatId } = useParams();
    const messages = useSelector(selectMessages)
  
    if (chatId && !messages[chatId]) {
      return <Navigate to="/chats" replace />;
    }

    return (
    <div>
        <ChatList />
        <MessageList messages={chatId ? messages[chatId] : []} />
        <Form />
    </div>
    )
}