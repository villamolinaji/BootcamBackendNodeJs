import { Router } from 'express';
import { houseRepository } from 'dals';
import {
  mapHouseFromModelToApi,
  mapHouseListFromModelToApi,
  mapHouseFromApiToModel,
} from './house.mappers';
import { paginateHouseList } from './house.helpers';

export const housesApi = Router();

housesApi
  .get('/', async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const houseList = await houseRepository.getHouseList();
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
  });
