const express = require('express');
const router = express.Router();
const axios = require('axios');
// const json_rest_example = require('./place_details.json');

const API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_API_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&location=42.652580,-73.756233&radius=5500&type=restaurant&keyword=`;

const PLACES_DETAIL_URL = `https://maps.googleapis.com/maps/api/place/details/json?fields=name,rating,vicinity,formatted_address,photo,url,price_level,review,user_ratings_total&key=${API_KEY}&place_id=`;

getSearchURL = (location, radius, keyword) => `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&location=${location}&radius=${radius}&type=restaurant&keyword=${keyword}`;

const locations = {
    Albany: '42.652580,-73.756233',
    Saratoga: '43.0675747,-73.7784538',
    Schenectady: '42.81424,-73.93957',
    Troy: '42.7345227,-73.6751181',
    Manhattan: '40.758896,-73.985130',
    Brooklyn: '40.650002,-73.949997'
}

/* GET api listing */
router.get('/', (req, res) => {
    res.send('api works');
})
const SEARCH_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&query=`;

router.get('/search', (req, res) => {
    axios.get(SEARCH_URL + req.query.query)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.log("ERROR!!");
            res.status(500).send(error);
        });

    }
);

router.get('/restaurant/search', (req, res) =>{

    const location = locations[req.query.city];
    const url = getSearchURL(location, 5500, req.query.query);
    console.log(url)

    axios.get(url)
        .then(response =>{
            res.status(200).json(response.data);
        })
        .catch(error => {
            console.log("ERROR!!!");
            res.status(500).send(error);
        })
})

router.get('/restaurant/:id', (req, res) => {
    console.log(req.params);
    axios.get(`${PLACES_DETAIL_URL}${req.params.id}`)
        .then(response => {
            res.status(200).json(response.data.result);
        })
        .catch(error => {
            res.status(500).send(error);
        })
    // res.json(json_rest_example.result);
})

module.exports = router;
