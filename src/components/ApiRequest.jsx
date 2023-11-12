import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '39735562-579f9e47f6a2ff3df54c66458';

export async function fetchImg(queryString, page) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: queryString,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page: page,
      },
    });
    return await response.data;
  } catch (error) {
    return new Error(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}
