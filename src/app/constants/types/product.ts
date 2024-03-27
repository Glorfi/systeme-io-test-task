export interface IProduct {
  id: number;
  name: string;
  options: IOptions;
  active: boolean;
  createdAt: string;
}

export interface IOptions {
  size: string;
  amount: number;
}
