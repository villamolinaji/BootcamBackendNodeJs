import * as model from 'dals';
import { Review } from 'dals';
import * as apiModel from './house.api-model';

export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  id: house._id,
  title: house.name,
  description: house.summary,
  street: house.address?.street,
  city: house.address?.market,
  country: house.address?.country,
  bedrooms: house.bedrooms,
  beds: house.beds,
  bathrooms: house.bathrooms,
  image: house.images.picture_url,
  reviews: mapReviewsListFromModelToApi(house.reviews, house._id),  
});

export const mapReviewsListFromModelToApi = (
  reviewList: model.Review[], house_id: string
): apiModel.Review[] => {
  let topReviewsList = reviewList?.sort(compareReviews).slice(0, 5).map(mapReviewFromModelToApi);
  topReviewsList.forEach(x => x.house_id = house_id);
  return topReviewsList;
}

export const mapReviewFromModelToApi = (
  review: model.Review
): apiModel.Review => ({
  id: review._id,
  date: review.date,
  reviewer_name: review.reviewer_name,
  comments: review.comments,  
  house_id: ''
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.House[] => houseList.map(mapHouseFromModelToApi);

export function compareReviews(a: model.Review, b: model.Review) {
  if (a.date < b.date) {
    return 1;
  }
  if (a.date > b.date) {
    return -1;
  }
  return 0;
}

export const mapReviewFromApiToModel = (review: apiModel.Review): model.Review => ({
  _id: review.id,
  comments: review.comments,
  date: new Date(),
  listing_id: '',
  reviewer_id: '',
  reviewer_name: review.reviewer_name,  
});

/*export const mapHouseFromApiToModel = (house: apiModel.House): model.House => ({
    _id: house.id,
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
});*/


/*export const mapImageFromApiToModel = (image: string): model.Image => ({  
  picture_url: image
});*/
