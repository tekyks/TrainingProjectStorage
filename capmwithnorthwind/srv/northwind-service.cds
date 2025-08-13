using {Northwind as external} from './external/Northwind';

service CatalogService {
    entity Products as
        projection on external.Products {
            key ID,
                Name,
                Description,
                ReleaseDate,
                Rating,
                Price
        };
}
