
export interface Message {
    author: string,
    value: string
  }

export type Messages = Record<string, Message[]>

export enum AUTHOR {
  USER = 'User',
  BOT = 'Bot',
};

export interface Chat {
  id: string,
  name: string
}
