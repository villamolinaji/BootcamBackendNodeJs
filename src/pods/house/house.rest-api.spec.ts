import supertest from 'supertest';
import { disconnect } from 'mongoose';
import { createRestApiServer, connectToDBServer } from 'core/servers';
import { envConstants } from 'core/constants';
import { houseContext } from 'dals/house/house.context';
import { Review } from './house.api-model';
import { housesApi } from './house.rest-api';

const app = createRestApiServer();
app.use(housesApi);

describe('pods/house/house.rest-api specs', () => {
  beforeAll(async () => {
    await connectToDBServer(envConstants.MONGODB_URI);
  });
  beforeEach(async () => {
    await houseContext.insertMany({
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
    });
  });

  afterEach(async () => {
    await houseContext.deleteMany();
  });
  afterAll(async () => {
    await disconnect();
  });

  describe('get book', () => {
    it('should return the whole book with values when it request "/" endpoint without query params', async () => {
      // Arrange
      const route = '/1';

      // Act
      const response = await supertest(app).get(route);

      // Assert
      expect(response.statusCode).toEqual(200);
      expect(response.body).toHaveLength(1);
    });

    it('should return return 201 when it inserts new review', async () => {
      // Arrange
      const route = '/reviews/';
      const newReview: Review = {        
        reviewer_name: 'test user',
        comments: 'test comment',
        house_id: '1',
        date: null,
        id: null        
      };

      // Act
      const response = await supertest(app).post(route).send(newReview);

      // Assert
      expect(response.statusCode).toEqual(201);
      expect(response.body.id).toEqual(expect.any(String));
      expect(response.body.reviewer_name).toEqual(newReview.reviewer_name);
      expect(response.body.comments).toEqual(newReview.comments);
      expect(response.body.date).toEqual(expect.any(Date));
    });
  });
});