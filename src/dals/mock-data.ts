import { ObjectId } from 'mongodb';
import { House } from './house';

export interface DB {
  houses: House[];
}

export const db: DB = {
    houses: [
      {
        _id: new ObjectId(),
        name: 'Casa rural Málaga',
        summary: 'Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...',
        address: 
        {
          street: 'Calle Camino Cupiana',
          market: 'Málaga',
          country: 'Spain',
        },
        bedrooms: 5,
        beds: 8,
        bathrooms: 2,
        images: [
          {
            picture_url: 'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
          },
        ],          
        /*reviews: [
            {
                id: new ObjectId(),
                date: new Date('2021-06-12'),
                reviewer_name: 'Ana',
                comments: 'La casa es fantástica, 100% recomendada',
            },
            {
                id: new ObjectId(),
                date: new Date('2021-03-22'),
                reviewer_name: 'Miguel',
                comments: 'Son super amables y pudimos pasar un rato bueno en familia. Muy recomendada',
            }
        ],*/
      },
    ],
};