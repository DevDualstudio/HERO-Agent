import { CreditCard } from './CreditCard';

export type PaymentMethod = {
  id: string;
  type: string;
  isPreferred: boolean;
  card: CreditCard;
};
