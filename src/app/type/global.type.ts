export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TJsonData<T> = {
  statusCode: number;
  message: string;
  meta?: TMeta;
  data: T;
};

export type TJwtPayload = {
  email: string;
  role: string;
};

export type TJwtDecode = {
  email: string;
  name: string;
  iat: number;
  exp: number;
};
