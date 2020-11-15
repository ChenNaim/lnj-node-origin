import React from 'react';
import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi',
  headers: {
    'content-type': 'application/xml',
    'x-rapidapi-key': 'fd7fdf97b5msh57ebbf3b50f6af3p1c81e1jsnf90ed52d70a7',
    'x-rapidapi-host': 'mycookbook-io1.p.rapidapi.com'
  },
  data: 'https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export default jsonPlaceholder;