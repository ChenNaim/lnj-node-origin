import axios from 'axios';

const getRecipes = async (query) => {
  const requestString = `https://api.edamam.com/search?app_id=5e12ad52&app_key=a5685217c0e203a505a6c0b0d1facad9&from=0&to=40&q=${query}`;
  const response = await axios.get(requestString);
  return response.data;
}

const getRecipesByDiet = async (query) => {
  const requestString = `https://api.edamam.com/search?app_id=5e12ad52&app_key=a5685217c0e203a505a6c0b0d1facad9&from=0&to=40&q=&diet=${query}`;
  const response = await axios.get(requestString);
  return response.data;
}

export {
  getRecipes, getRecipesByDiet
};

