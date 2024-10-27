function makeHTTPResponse(input){
  const myApi = "28678786-a2e7b218e16ae31de09ab66ee";
  const url = `https://pixabay.com/api/?key=${myApi}&q=${input}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url)
  .then(response => {
    if (!response.ok) throw new Error('Failed to fetch images');
    return response.json();
  });
}

export default makeHTTPResponse;