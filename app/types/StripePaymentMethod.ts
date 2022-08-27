import { CreditCard } from './CreditCard';

export type StripePaymentMethod = {
  card: CreditCard;
  created: number;
  livemode: boolean;
  tokenId: string;
};
