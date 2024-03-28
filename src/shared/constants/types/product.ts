export interface IProduct {
  id: number;
  name: string;
  options: IOptions;
  active: boolean;
  createdAt: string;
  [key: string]: string | number | boolean | IOptions
}

export interface IOptions {
  size: string;
  amount: number;
}
