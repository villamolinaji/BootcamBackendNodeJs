import { Review } from '.';
export interface House {
    id: string;
    title: string;
    description: string;
    street: string;
    city: string;
    country: string;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    images: Array<string>;
    //reviews: Array<Review>;
  }
  