import axios from 'axios'

const Base_URL='https://youtube-v31.p.rapidapi.com/captions';
const options = {

  url: Base_URL,
  params: {

   maxResults:'50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}