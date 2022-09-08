export interface Message {
    author: AUTHOR,
    value: string
  }

export type Messages = Message[]

export enum AUTHOR {
  USER = 'User',
  BOT = 'Bot',
};
