import { HouseRepository } from './house.repository';
import { houseContext } from "../house.context";
import { Review } from 'pods/house/house.api-model';
import { compareReviewsDateDesc, mapReviewFromApiToModel, mapReviewFromModelToApi } from 'pods/house/house.mappers';
import mongoose from 'mongoose';

export const dbRepository: HouseRepository = {
  getHouseListByCountry: async (country_code: string) => {
    return await houseContext.find(
      {"address.country_code": country_code}, 
      { projection: {
        _id: 1, 
        name: 1, 
        "images.picture_url": 1 
      }}
    ).lean();
  },
  getHouse: async (id: string) => {    
    return await houseContext.findOne(
      {_id: id}/*,
      { projection: { 
        _id: 1, 
        name: 1, 
        summary: 1, 
        "address.street": 1, 
        "address.market": 1, 
        "address.country": 1, 
        bedrooms: 1, 
        beds: 1, 
        bathrooms: 1, 
        "images.picture_url": 1, 
        reviews: 1 
      }}*/
    ).lean();
  },  
  insertReview: async (review: Review) => {    
    review.id = new mongoose.Types.ObjectId().toHexString();
    const result = await houseContext.findOneAndUpdate(
      {
        _id: review.house_id,
      },
      { $push: { reviews: mapReviewFromApiToModel(review) } },
      { returnDocument: 'after', projection: {
        reviews: 1
      } }
    );
    return mapReviewFromModelToApi(result?.reviews.sort(compareReviewsDateDesc)[0]);   
  },
};
