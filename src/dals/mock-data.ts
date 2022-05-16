import { House } from './house';

export interface DB {
  houses: House[];
}

export const db: DB = {
    houses: [
      {
        _id: "1",
        name: 'Casa rural Málaga',
        summary: 'Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...',
        address: 
        {
          street: 'Calle Camino Cupiana',
          market: 'Málaga',
          country: 'Spain',
          country_code: 'ES',
          government_area: '',
          location: null,
          suburb: ''
        },
        bedrooms: 5,
        beds: 8,
        bathrooms: 2,
        images: 
        {
          thumbnail_url: '',
          medium_url: '',
          picture_url: 'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
          xl_picture_url: '',
        },         
        reviews: [
            {
                _id: "1",
                date: new Date('2021-06-12'),
                reviewer_name: 'Ana',
                comments: 'La casa es fantástica, 100% recomendada',
                listing_id: '',
                reviewer_id: '',
            },
            {
                _id: "2",
                date: new Date('2021-03-22'),
                reviewer_name: 'Miguel',
                comments: 'Son super amables y pudimos pasar un rato bueno en familia. Muy recomendada',
                listing_id: '',
                reviewer_id: '',
            }
        ],
        space: '',
        description: '',
        neighborhood_overview: '',
        notes: '',
        transit: '',
        access: '',
        interaction: '',
        house_rules: '',
        property_type: '',
        room_type: '',
        bed_type: '',
        minimum_nights: '',
        maximum_nights: '',
        cancellation_policy: '',
        last_scraped: null,            
        calendar_last_scraped: null,
        accommodates: null,
        amenities: null,
        price: null,
        weekly_price: null,
        monthly_price: null,
        cleaning_fee: null,
        extra_people: null,
        guests_included: null,
        host: null,
        availability: null,
        review_scores: null,
      },
    ],
};