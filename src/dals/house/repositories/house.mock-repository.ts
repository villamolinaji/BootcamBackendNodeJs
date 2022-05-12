import { HouseRepository } from './house.repository';
import { House } from '../house.model';
import { db } from '../../mock-data';
import { ObjectId } from 'mongodb';

const insertHouse = (house: House) => {
  const _id = new ObjectId();
  const newHouse: House = {
    ...house,
    _id,
  };

  db.houses = [...db.houses, newHouse];
  return newHouse;
};

const updateHouse = (house: House) => {
  db.houses = db.houses.map((b) =>
    b._id.toHexString() === house._id.toHexString() ? { ...b, ...house } : b
  );
  return house;
};

export const mockRepository: HouseRepository = {
  getHouseList: async () => db.houses,
  getHouse: async (id: string) => db.houses.find((b) => b._id.toHexString() === id),  
};
