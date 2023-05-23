export type PostT = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

export type UserT = {
  userId: number;
  image: string;
  username: string;
};
