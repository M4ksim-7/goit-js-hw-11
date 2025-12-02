import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53485925-ce0cf73790b8d8f557c3a40d7';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
