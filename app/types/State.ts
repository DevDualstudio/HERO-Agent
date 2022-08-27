import { Zone } from './Zone';

export type State = {
  id: number;
  name: string;
  shortName: string;
  zones: Zone[];
};

export type StateResponse = {
  count: number;
  list: State[];
};
