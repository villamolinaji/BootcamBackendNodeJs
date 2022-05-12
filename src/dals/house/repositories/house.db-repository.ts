import { HouseRepository } from './house.repository';
import { House } from '../house.model';

export const dbRepository: HouseRepository = {
  getHouseList: async () => {
    throw new Error('Not implemented');
  },
  getHouse: async (id: string) => {
    throw new Error('Not implemented');
  },  
};
