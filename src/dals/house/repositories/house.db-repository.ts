import { ObjectId } from 'mongodb';
import { HouseRepository } from './house.repository';
import { House } from '../house.model';
import { getDBInstance } from 'core/servers';
import { Review } from 'pods/house/house.api-model';
import { compareReviews, mapReviewFromApiToModel, mapReviewFromModelToApi } from 'pods/house/house.mappers';

export const dbRepository: HouseRepository = {
  getHouseListByCountry: async (country_code: string) => {
    const db = getDBInstance();
    return await db.collection<House>('listingsAndReviews').find(
      {"address.country_code": country_code}, 
      { projection: {
        _id: 1, 
        name: 1, 
        "images.picture_url": 1 
      }}
    ).toArray();
  },
  getHouse: async (id: string) => {
    const db = getDBInstance();
    return await db.collection<House>('listingsAndReviews').findOne(
      {_id: id},
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
      }}
    );
  },  
  insertReview: async (review: Review) => {
    const db = getDBInstance();
    review.id = new ObjectId().toHexString();
    const { value } = await db.collection<House>('listingsAndReviews').findOneAndUpdate(
      {
        _id: review.house_id,
      },
      { $push: { reviews: mapReviewFromApiToModel(review) } },
      { returnDocument: 'after', projection: {
        reviews: 1
      } }
    );
    return mapReviewFromModelToApi(value?.reviews.sort(compareReviews)[0]);   
  },
};
