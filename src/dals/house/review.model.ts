import { ObjectId } from 'mongodb';

export interface Review {
    _id: ObjectId;
    date: Date;
    reviewer_name: string;
    comments: string;
  }
  