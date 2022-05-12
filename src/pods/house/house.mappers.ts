import { ObjectId } from 'mongodb';
import * as model from 'dals';
import * as apiModel from './house.api-model';

export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  id: house._id.toHexString(),
  title: house.name,
  description: house.summary,
  street: house.address?.street,
  city: house.address?.market,
  country: house.address?.country,
  bedrooms: house.bedrooms,
  beds: house.beds,
  bathrooms: house.bathrooms,
  images: house.images.map(mapImageFromModelToApi),
  //reviews: house.reviews,  
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.House[] => houseList.map(mapHouseFromModelToApi);

export const mapHouseFromApiToModel = (house: apiModel.House): model.House => ({
    _id: new ObjectId(house.id),
    name: house.title,
    summary: house.description,
    address: 
    {
      street: house.street,
      market: house.city,
      country: house.country,   
    },
    bedrooms: house.bedrooms,
    beds: house.beds,
    bathrooms: house.bathrooms,
    images: house.images.map(mapImageFromApiToModel),
    //reviews: house.reviews, 
});

export const mapImageFromModelToApi = (image: model.Image): string => (
  image.picture_url  
);

export const mapImageFromApiToModel = (image: string): model.Image => ({  
  picture_url: image
});
