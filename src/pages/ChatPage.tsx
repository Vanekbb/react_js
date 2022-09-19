import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from 'react-router-dom'
import { ChatList } from "/src/components/ChatList";
import { Form } from "/src/components/Form";
import { MessageList } from "/src/MessageList/MessageList";
import { AUTHOR } from "/src/types";
import { selectMessages } from "/src/store/messages/selectors";
import { addMessage } from "/src/store/messages/actions";

  export const ChatPage: FC = () => {
    const { chatId } = useParams();
    const messages = useSelector(selectMessages)
    const dispatch = useDispatch()
  
    useEffect(() => {
      if (
        chatId &&
        messages[chatId]?.length > 0 &&
        messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
      ) {
        const timeout = setTimeout(() => {
          dispatch(addMessage(chatId, {
            author: AUTHOR.BOT,
            value: 'Im BOT',
          }));
        }, 1500);
  
        return () => clearTimeout(timeout);
      }
    }, [chatId, messages, dispatch]);
  
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