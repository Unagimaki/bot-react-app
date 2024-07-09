import axios from 'axios';

export const createTranslate = async (text = 'Hello World') => {
    const options = {
        method: 'POST',
        url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'x-rapidapi-key': '38ad936307mshecedccd33d4fab1p1fbdd5jsn8695b0cbe798',
          'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          q: text,
          source: 'en',
          target: 'ru'
        }
      };
      
      try {
          const response = await axios.request(options);
          return await response.data.data.translations.translatedText
      } catch (error) {
          console.error(error);
      }
}
