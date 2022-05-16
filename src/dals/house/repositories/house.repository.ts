import { Review } from 'pods/house/house.api-model';
import { House } from '../house.model';

export interface HouseRepository {
  getHouseListByCountry: (country_code: string) => Promise<House[]>;
  getHouse: (id: string) => Promise<House>;  
  insertReview: (review: Review) => Promise<Review>;
}
