import { ObjectId } from 'mongodb';
import { Review } from '.';
import { Address } from './address.model';
import { Image } from './image.model';

export interface House {
    _id: ObjectId;
    name: string;
    summary: string;
    address: Address;    
    bedrooms: number;
    beds: number;
    bathrooms: number;
    images: Array<Image>;
    //reviews: Array<Review>;
  }
  