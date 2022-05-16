import { Router } from 'express';
import { houseRepository } from 'dals';
import {
  mapHouseFromModelToApi,
  mapHouseListFromModelToApi,    
  mapReviewFromModelToApi
} from './house.mappers';
import { paginateHouseList } from './house.helpers';

export const housesApi = Router();

housesApi
  .get('/country_code/:country_code', async (req, res, next) => {
    try {
      const { country_code } = req.params;
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const houseList = await houseRepository.getHouseListByCountry(country_code);
      const paginatedHouseList = paginateHouseList(houseList, page, pageSize);
      res.send(mapHouseListFromModelToApi(paginatedHouseList));
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const house = await houseRepository.getHouse(id);
      res.send(mapHouseFromModelToApi(house));
    } catch (error) {
      next(error);
    }
  })
  .post('/reviews', async (req, res, next) => {
    try {      
      const newReview = await houseRepository.insertReview(req.body);
      res.status(201).send(newReview);
    } catch (error) {
      next(error);
    }
  });
