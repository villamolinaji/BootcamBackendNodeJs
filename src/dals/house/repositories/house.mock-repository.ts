import { HouseRepository } from './house.repository';
import { db } from '../../mock-data';
import { Review } from 'pods/house/house.api-model';
import { mapReviewFromApiToModel, mapReviewFromModelToApi } from 'pods/house/house.mappers';

const insertReview = (review: Review) => {
  let house = db.houses.find((h) => h._id === review.house_id);
  review.id = (house.reviews.length + 1).toString();
  house.reviews.push(mapReviewFromApiToModel(review));  
  return mapReviewFromModelToApi(house.reviews.pop());
  };

export const mockRepository: HouseRepository = {
  getHouseListByCountry: async (country_code: string) => db.houses.filter((h) => h.address?.country_code === country_code),
  getHouse: async (id: string) => db.houses.find((h) => h._id === id),  
  insertReview: async (review: Review) => insertReview(review),
};
