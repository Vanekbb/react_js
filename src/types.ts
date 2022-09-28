
export interface Message {
    author: string,
    value: string
  }

export interface MessageWithId extends Message{
  id: string
}

export type Messages = Record<string, Message[]>

export type MessagesWithId = Record<string, MessagesWithId[]>

export enum AUTHOR {
  USER = 'User',
  BOT = 'Bot',
};

export interface Chat {
  id: string,
  name: string
}
