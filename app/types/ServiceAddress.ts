import { Coordinates } from './Coordinates';

export type ServiceAddress = Coordinates & {
  address: string;
};
