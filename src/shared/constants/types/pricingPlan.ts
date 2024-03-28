export interface IPricingPlan {
  id: number;
  description: string;
  active: boolean;
  createdAt: string;
  removedAt: string;
  [key: string]: string | number | boolean;
}
