import axios from 'axios';

const PIXABAY_API_KEY = '53485925-ce0cf73790b8d8f557c3a40d7';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: PIXABAY_API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
