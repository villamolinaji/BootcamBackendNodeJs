import * as model from "dals";
import * as apiModel from "./house.api-model";
import {
    compareReviewsDateDesc,
  mapHouseFromModelToApi,
  mapHouseListFromModelToApi,
  mapReviewFromApiToModel,
  mapReviewFromModelToApi,
  mapReviewsListFromModelToApi,
} from "./house.mappers";

describe("pods/house/house.mappers spec", () => {
  describe("mapHouseListFromModelToApi", () => {
    it("should return empty array when it feeds houseList equals undefined", () => {
      // Arrange
      const houseList: model.House[] = undefined;

      // Act
      const result: apiModel.House[] = mapHouseListFromModelToApi(houseList);

      // Assert
      expect(result).toEqual([]);
    });

    it("should return empty array when it feeds houseList equals null", () => {
      // Arrange
      const houseList: model.House[] = null;

      // Act
      const result: apiModel.House[] = mapHouseListFromModelToApi(houseList);

      // Assert
      expect(result).toEqual([]);
    });

    it("should return empty array when it feeds houseList equals empty array", () => {
      // Arrange
      const houseList: model.House[] = [];

      // Act
      const result: apiModel.House[] = mapHouseListFromModelToApi(houseList);

      // Assert
      expect(result).toEqual([]);
    });

    it("should return one mapped item in array when it feeds houseList with one item", () => {
      // Arrange
      const houseList: model.House[] = [
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
            {
              _id: "2",
              date: new Date("2021-03-22"),
              reviewer_name: "Miguel",
              comments:
                "Son super amables y pudimos pasar un rato bueno en familia. Muy recomendada",
            },
          ],
        },
      ];

      // Act
      const result: apiModel.House[] = mapHouseListFromModelToApi(houseList);

      // Assert
      expect(result).toEqual([
        {
          id: "1",
          title: "Casa rural Málaga",
          description:
            "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...",
          street: "Calle Camino Cupiana",
          city: "Málaga",
          country: "Spain",
          bedrooms: 5,
          beds: 8,
          bathrooms: 2,
          image:
            "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
          reviews: [
            {
              id: "1",
              date: new Date("2021-06-12"),
              reviewer_name: "Ana",
              comments: "La casa es fantástica, 100% recomendada",
              house_id: "1",
            },
            {
              id: "2",
              date: new Date("2021-03-22"),
              reviewer_name: "Miguel",
              comments:
                "Son super amables y pudimos pasar un rato bueno en familia. Muy recomendada",
              house_id: "1",
            },
          ],
        },
      ]);
    });
  });

  describe("mapHouseFromModelToApi", () => {
    it("should return data correctly mapped", () => {
      // Arrange
      const house: model.House = {
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
          {
            _id: "2",
            date: new Date("2021-03-22"),
            reviewer_name: "Miguel",
            comments:
              "Son super amables y pudimos pasar un rato bueno en familia. Muy recomendada",
          },
        ],
      };

      // Act
      const result: apiModel.House = mapHouseFromModelToApi(house);

      // Assert
      expect(result).toEqual({
        id: "1",
        title: "Casa rural Málaga",
        description:
          "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baño, piscina, ...",
        street: "Calle Camino Cupiana",
        city: "Málaga",
        country: "Spain",
        bedrooms: 5,
        beds: 8,
        bathrooms: 2,
        image:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
        reviews: [
          {
            id: "1",
            date: new Date("2021-06-12"),
            reviewer_name: "Ana",
            comments: "La casa es fantástica, 100% recomendada",
            house_id: "1",
          },
          {
            id: "2",
            date: new Date("2021-03-22"),
            reviewer_name: "Miguel",
            comments:
              "Son super amables y pudimos pasar un rato bueno en familia. Muy recomendada",
            house_id: "1",
          },
        ],
      });
    });
  });

  describe("mapReviewsListFromModelToApi", () => {
    it("should return empty array when it feeds reviewList equals undefined", () => {
      // Arrange
      const reviewList: model.Review[] = undefined;
      const houseId = "1";

      // Act
      const result: apiModel.Review[] = mapReviewsListFromModelToApi(
        reviewList,
        houseId
      );

      // Assert
      expect(result).toEqual([]);
    });
    it("should return empty array when it feeds reviewList equals null", () => {
      // Arrange
      const reviewList: model.Review[] = null;
      const houseId = "1";

      // Act
      const result: apiModel.Review[] = mapReviewsListFromModelToApi(
        reviewList,
        houseId
      );

      // Assert
      expect(result).toEqual([]);
    });
    it("should return empty array when it feeds reviewList equals empty array", () => {
      // Arrange
      const reviewList: model.Review[] = [];
      const houseId = "1";

      // Act
      const result: apiModel.Review[] = mapReviewsListFromModelToApi(
        reviewList,
        houseId
      );

      // Assert
      expect(result).toEqual([]);
    });
    it("should return one mapped item in array when it feeds reviewList with one item", () => {
      // Arrange
      const reviewList: model.Review[] = [
        {
          _id: "1",
          date: new Date("2021-06-12"),
          reviewer_name: "Ana",
          comments: "La casa es fantástica, 100% recomendada",
        },
      ];
      const houseId = "1";

      // Act
      const result: apiModel.Review[] = mapReviewsListFromModelToApi(
        reviewList,
        houseId
      );

      // Assert
      expect(result).toEqual([
        {
          id: "1",
          date: new Date("2021-06-12"),
          reviewer_name: "Ana",
          comments: "La casa es fantástica, 100% recomendada",
          house_id: "1",
        },
      ]);
    });
    it("should return top five items ordered by date", () => {
      // Arrange
      const reviewList: model.Review[] = [
        {
          _id: "1",
          date: new Date("2021-06-12"),
          reviewer_name: "Reviewer 1",
          comments: "Comment 1",
        },
        {
          _id: "2",
          date: new Date("2021-06-13"),
          reviewer_name: "Reviewer 2",
          comments: "Comment 2",
        },
        {
          _id: "3",
          date: new Date("2021-06-14"),
          reviewer_name: "Reviewer 3",
          comments: "Comment 3",
        },
        {
          _id: "4",
          date: new Date("2021-06-15"),
          reviewer_name: "Reviewer 4",
          comments: "Comment 4",
        },
        {
          _id: "5",
          date: new Date("2021-06-16"),
          reviewer_name: "Reviewer 5",
          comments: "Comment 5",
        },
        {
          _id: "6",
          date: new Date("2021-06-17"),
          reviewer_name: "Reviewer 6",
          comments: "Comment 6",
        },
      ];
      const houseId = "1";

      // Act
      const result: apiModel.Review[] = mapReviewsListFromModelToApi(
        reviewList,
        houseId
      );

      // Assert
      expect(result).toEqual([
        {
          id: "6",
          date: new Date("2021-06-17"),
          reviewer_name: "Reviewer 6",
          comments: "Comment 6",
          house_id: "1",
        },
        {
          id: "5",
          date: new Date("2021-06-16"),
          reviewer_name: "Reviewer 5",
          comments: "Comment 5",
          house_id: "1",
        },
        {
          id: "4",
          date: new Date("2021-06-15"),
          reviewer_name: "Reviewer 4",
          comments: "Comment 4",
          house_id: "1",
        },
        {
          id: "3",
          date: new Date("2021-06-14"),
          reviewer_name: "Reviewer 3",
          comments: "Comment 3",
          house_id: "1",
        },
        {
          id: "2",
          date: new Date("2021-06-13"),
          reviewer_name: "Reviewer 2",
          comments: "Comment 2",
          house_id: "1",
        },
      ]);
    });
  });

  describe("mapReviewFromModelToApi", () => {
    it("should return object correctly mapped", () => {
      // Arrange
      const review: model.Review = {
        _id: "1",
        date: new Date("2021-06-12"),
        reviewer_name: "Ana",
        comments: "La casa es fantástica, 100% recomendada",
      };

      // Act
      const result: apiModel.Review = mapReviewFromModelToApi(review);

      // Assert
      expect(result).toEqual({
        id: "1",
        date: new Date("2021-06-12"),
        reviewer_name: "Ana",
        comments: "La casa es fantástica, 100% recomendada",
        house_id: "",
      });
    });
  });

  describe("mapReviewFromApiToModel", () => {
    it("should return object correctly mapped", () => {
      // Arrange
      const review: apiModel.Review = {
        id: "1",
        date: new Date("2021-06-12"),
        reviewer_name: "Ana",
        comments: "La casa es fantástica, 100% recomendada",
        house_id: "11",
      };

      // Act
      const result: model.Review = mapReviewFromApiToModel(review);

      // Assert
      expect(result).toEqual({
        _id: "1",
        date: new Date(),
        listing_id: '',
        reviewer_id: '',
        reviewer_name: "Ana",
        comments: "La casa es fantástica, 100% recomendada",        
      });
    });
  });

  describe("compareReviewsDateDesc", () => {
    it("should return that are equal", () => {
      // Arrange
      const firstReview: model.Review = {
        _id: "1",
        date: new Date("2021-06-12"),
        reviewer_name: "Ana",
        comments: "Comment 2",        
      };
      const secondReview: model.Review = {
        _id: "2",
        date: new Date("2021-06-12"),
        reviewer_name: "Ana 2",
        comments: "Comment 1",        
      };

      // Act
      const result = compareReviewsDateDesc(firstReview, secondReview);

      // Assert
      expect(result).toEqual(0);
    });
    it("should return that firstReview is lower", () => {
        // Arrange
        const firstReview: model.Review = {
          _id: "1",
          date: new Date("2021-06-11"),
          reviewer_name: "Ana",
          comments: "Comment 2",        
        };
        const secondReview: model.Review = {
          _id: "2",
          date: new Date("2021-06-12"),
          reviewer_name: "Ana 2",
          comments: "Comment 1",        
        };
  
        // Act
        const result = compareReviewsDateDesc(firstReview, secondReview);
  
        // Assert
        expect(result).toEqual(1);
      });
      it("should return that firstReview is greater", () => {
        // Arrange
        const firstReview: model.Review = {
          _id: "1",
          date: new Date("2021-06-13"),
          reviewer_name: "Ana",
          comments: "Comment 2",        
        };
        const secondReview: model.Review = {
          _id: "2",
          date: new Date("2021-06-12"),
          reviewer_name: "Ana 2",
          comments: "Comment 1",        
        };
  
        // Act
        const result = compareReviewsDateDesc(firstReview, secondReview);
  
        // Assert
        expect(result).toEqual(-1);
      });
  });
});
