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
    image: string;
    reviews: Review[];
  }
  
  export interface Review {
    id: string;    
    date: Date;
    reviewer_name: string;
    comments: string;
    house_id: string;
  }