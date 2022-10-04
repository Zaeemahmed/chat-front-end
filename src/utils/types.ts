export type conversationType = {
  id: number;
  name: string;
  lastMessage: string;
};

export type createUserParams = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type userLoginParams = {
  username: string;
  password: string;
};

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};
