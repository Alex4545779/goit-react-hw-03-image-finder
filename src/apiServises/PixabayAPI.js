const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(nextName, page) {
  return fetch(
    `${BASE_URL}?q=${nextName}&page=${page}&key=22948262-953a9601ef8ec29dc611c2152&image_type=photo&orientation=horizontal&per_page=12
`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}
const api = { fetchImages };
export default api;
