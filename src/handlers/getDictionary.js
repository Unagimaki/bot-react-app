import axios from 'axios';

export const getDictionary = async (word) => {
    const options = {
        method: 'GET',
        url: `https://e2e-dictionary.p.rapidapi.com/dictionary/${word}`,
        headers: {
          'x-rapidapi-key': '38ad936307mshecedccd33d4fab1p1fbdd5jsn8695b0cbe798',
          'x-rapidapi-host': 'e2e-dictionary.p.rapidapi.com'
        }
    }
      
    try {
      const response = await axios.request(options)
      return response
    } catch (error) {
      console.error('error from getDictionary: ' + error);
    }
}
