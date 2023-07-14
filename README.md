# mapping-app

To run this project locally, first fork the repository and then run `npm i` to install the dependencies, then `npm run dev` to start the server.

The endpoint to fetch coordinate data is `GET localhost:5001/api/points/single`.

The endpoint takes a body of JSON in the request with a single `'lat'` and `'long'` value eg.

```json
{
    "lat": 11.738,
    "long": -16.7
}
```

If the coordinates are within one of the polygons in the dataset, it will return the country information in the following format:
`{"ADMIN":"Angola","ISO_A3":"AGO"}`
