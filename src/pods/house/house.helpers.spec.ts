import { House } from "dals";
import { paginateHouseList } from "./house.helpers";

describe("pods/house/house.helpers spec", () => {
  describe("paginateHouseList", () => {
    it("should return empty array when it feeds houseList equals undefined", () => {
      // Arrange
      const houseList: House[] = undefined;
      const page = 0;
      const pageSize = 1;

      // Act
      const result: House[] = paginateHouseList(houseList, page, pageSize);

      // Assert
      expect(result).toEqual([]);
    });
    it("should return empty array when it feeds houseList equals null", () => {
      // Arrange
      const houseList: House[] = null;
      const page = 0;
      const pageSize = 1;

      // Act
      const result: House[] = paginateHouseList(houseList, page, pageSize);

      // Assert
      expect(result).toEqual([]);
    });
    it("should return empty array when it feeds houseList equals empty array", () => {
      // Arrange
      const houseList: House[] = [];
      const page = 0;
      const pageSize = 1;

      // Act
      const result: House[] = paginateHouseList(houseList, page, pageSize);

      // Assert
      expect(result).toEqual([]);
    });
    it("should return empty array when page does not exist", () => {
      // Arrange
      const houseList: House[] = [
        {
          _id: "1",
          name: "Casa rural Málaga",
          summary:
            "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...",
          address: {
            street: "Calle Camino Cupiana",
            market: "Málaga",
            country: "Spain",
            country_code: "ES",
          },
          bedrooms: 5,
          beds: 8,
          bathrooms: 2,
          images: {
            thumbnail_url: "",
            medium_url: "",
            picture_url:
              "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
          },
          reviews: [
            {
              _id: "1",
              date: new Date("2021-06-12"),
              reviewer_name: "Ana",
              comments: "La casa es fantástica, 100% recomendada",
            },
          ],
        },
      ];
      const page = 2;
      const pageSize = 5;

      // Act
      const result: House[] = paginateHouseList(houseList, page, pageSize);

      // Assert
      expect(result).toEqual([]);
    });
    it("should return correct number of records according to pageSize", () => {
      // Arrange
      const houseList: House[] = [
        {
          _id: "1",
          name: "Casa rural Málaga",
          summary:
            "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...",
          address: {
            street: "Calle Camino Cupiana",
            market: "Málaga",
            country: "Spain",
            country_code: "ES",
          },
          bedrooms: 5,
          beds: 8,
          bathrooms: 2,
          images: {
            thumbnail_url: "",
            medium_url: "",
            picture_url:
              "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
          },
          reviews: [
            {
              _id: "1",
              date: new Date("2021-06-12"),
              reviewer_name: "Ana",
              comments: "La casa es fantástica, 100% recomendada",
            },
          ],
        },
        {
          _id: "2",
          name: "Casa rural Málaga",
          summary:
            "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...",
          address: {
            street: "Calle Camino Cupiana",
            market: "Málaga",
            country: "Spain",
            country_code: "ES",
          },
          bedrooms: 5,
          beds: 8,
          bathrooms: 2,
          images: {
            thumbnail_url: "",
            medium_url: "",
            picture_url:
              "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
          },
          reviews: [
            {
              _id: "1",
              date: new Date("2021-06-12"),
              reviewer_name: "Ana",
              comments: "La casa es fantástica, 100% recomendada",
            },
          ],
        },
        {
          _id: "3",
          name: "Casa rural Málaga",
          summary:
            "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...",
          address: {
            street: "Calle Camino Cupiana",
            market: "Málaga",
            country: "Spain",
            country_code: "ES",
          },
          bedrooms: 5,
          beds: 8,
          bathrooms: 2,
          images: {
            thumbnail_url: "",
            medium_url: "",
            picture_url:
              "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
          },
          reviews: [
            {
              _id: "1",
              date: new Date("2021-06-12"),
              reviewer_name: "Ana",
              comments: "La casa es fantástica, 100% recomendada",
            },
          ],
        },
      ];
      const page = 1;
      const pageSize = 2;

      // Act
      const result: House[] = paginateHouseList(houseList, page, pageSize);

      // Assert
      expect(result).toEqual([
        {
          _id: "1",
          name: "Casa rural Málaga",
          summary:
            "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...",
          address: {
            street: "Calle Camino Cupiana",
            market: "Málaga",
            country: "Spain",
            country_code: "ES",
          },
          bedrooms: 5,
          beds: 8,
          bathrooms: 2,
          images: {
            thumbnail_url: "",
            medium_url: "",
            picture_url:
              "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
          },
          reviews: [
            {
              _id: "1",
              date: new Date("2021-06-12"),
              reviewer_name: "Ana",
              comments: "La casa es fantástica, 100% recomendada",
            },
          ],
        },
        {
          _id: "2",
          name: "Casa rural Málaga",
          summary:
            "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...",
          address: {
            street: "Calle Camino Cupiana",
            market: "Málaga",
            country: "Spain",
            country_code: "ES",
          },
          bedrooms: 5,
          beds: 8,
          bathrooms: 2,
          images: {
            thumbnail_url: "",
            medium_url: "",
            picture_url:
              "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
          },
          reviews: [
            {
              _id: "1",
              date: new Date("2021-06-12"),
              reviewer_name: "Ana",
              comments: "La casa es fantástica, 100% recomendada",
            },
          ],
        },
      ]);
    });
    it("should return correct records according to page", () => {
        // Arrange
        const houseList: House[] = [
          {
            _id: "1",
            name: "Casa rural Málaga",
            summary:
              "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...",
            address: {
              street: "Calle Camino Cupiana",
              market: "Málaga",
              country: "Spain",
              country_code: "ES",
            },
            bedrooms: 5,
            beds: 8,
            bathrooms: 2,
            images: {
              thumbnail_url: "",
              medium_url: "",
              picture_url:
                "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
            },
            reviews: [
              {
                _id: "1",
                date: new Date("2021-06-12"),
                reviewer_name: "Ana",
                comments: "La casa es fantástica, 100% recomendada",
              },
            ],
          },
          {
            _id: "2",
            name: "Casa rural Málaga",
            summary:
              "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...",
            address: {
              street: "Calle Camino Cupiana",
              market: "Málaga",
              country: "Spain",
              country_code: "ES",
            },
            bedrooms: 5,
            beds: 8,
            bathrooms: 2,
            images: {
              thumbnail_url: "",
              medium_url: "",
              picture_url:
                "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
            },
            reviews: [
              {
                _id: "1",
                date: new Date("2021-06-12"),
                reviewer_name: "Ana",
                comments: "La casa es fantástica, 100% recomendada",
              },
            ],
          },
          {
            _id: "3",
            name: "Casa rural Málaga",
            summary:
              "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...",
            address: {
              street: "Calle Camino Cupiana",
              market: "Málaga",
              country: "Spain",
              country_code: "ES",
            },
            bedrooms: 5,
            beds: 8,
            bathrooms: 2,
            images: {
              thumbnail_url: "",
              medium_url: "",
              picture_url:
                "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
            },
            reviews: [
              {
                _id: "1",
                date: new Date("2021-06-12"),
                reviewer_name: "Ana",
                comments: "La casa es fantástica, 100% recomendada",
              },
            ],
          },
        ];
        const page = 2;
        const pageSize = 2;
  
        // Act
        const result: House[] = paginateHouseList(houseList, page, pageSize);
  
        // Assert
        expect(result).toEqual([
          {
            _id: "3",
            name: "Casa rural Málaga",
            summary:
              "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...",
            address: {
              street: "Calle Camino Cupiana",
              market: "Málaga",
              country: "Spain",
              country_code: "ES",
            },
            bedrooms: 5,
            beds: 8,
            bathrooms: 2,
            images: {
              thumbnail_url: "",
              medium_url: "",
              picture_url:
                "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
            },
            reviews: [
              {
                _id: "1",
                date: new Date("2021-06-12"),
                reviewer_name: "Ana",
                comments: "La casa es fantástica, 100% recomendada",
              },
            ],
          },          
        ]);
      });
  });
});
