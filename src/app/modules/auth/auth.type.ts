export type TRegister = {
  fullName: string;
  designation: string;
  employeeId: string;
  email: string;
  password: string;
};

export type TLogin = {
  email: string;
  password: string;
};

export type TTokenPayload = {
  fullName: string;
  email: string;
};
