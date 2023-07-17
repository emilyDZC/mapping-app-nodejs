# mapping-app

This app is deployed at https://still-reaches-09897-4b356af3e96d.herokuapp.com/

The endpoint to fetch coordinate data is `https://still-reaches-09897-4b356af3e96d.herokuapp.com/api/points` on the hosted site. 

This endpoint is linked to the Geographical Regions dataset (one of the three layers on the map).

The endpoint takes a body of JSON in the request with a single `'lat'` and `'long'` value eg.

```json
{
    "lat": 53.3,
    "long": 1.47
}
```

If the coordinates are within one of the polygons in the dataset, it will return the geographical region information in the following format:

```json
{
    "scalerank": 1,
    "name": "BRITISH ISLES",
    "namealt": null,
    "region": "Europe",
    "subregion": "British Isles",
    "featureclass": "Island group"
}
```
<img width="876" alt="Screenshot 2023-07-17 at 19 48 55" src="https://github.com/emilyDZC/mapping-app-nodejs/assets/52205276/01598830-3102-4cab-9423-dddbc31f5a42">


### Running the project locally

If you wish to run this project locally, first fork the repository and then run `npm i` to install the dependencies, then `npm run dev` to start the server.

The endpoint to fetch coordinate data is `POST localhost:5001/api/points/single`

The app should be available to view at `http://localhost:8080/`
