import axios from 'axios';

const getRecipes = async (query) => {
  const requestString = `https://api.edamam.com/search?app_id=5e12ad52&app_key=a5685217c0e203a505a6c0b0d1facad9&from=0&to=40&q=${query}`;
  const response = await axios.get(requestString);
  return response.data;
}

export {
  getRecipes
};


// const getUsers = async () => {
//     // return axios.get('https://jsonplaceholder.typicode.com/users')
//     //     .then(response => response.data);
    
//     const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api`);
//     return response.data;

// }

// export {
//     getUsers
// };
