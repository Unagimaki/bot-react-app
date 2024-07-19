import axios from 'axios';

export const getTranslate = async (text = 'Hello World', language = 'ru') => {
  console.log('call');
  const options = {
    method: 'POST',
    url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'x-rapidapi-key': '38ad936307mshecedccd33d4fab1p1fbdd5jsn8695b0cbe798',
      'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      q: 'some text',
      source: 'en',
      target: language
    }
  };
  
  try {
    const response = await axios.request(options)
    alert(response)
    return response.data.translations.translatedText
  } catch (error) {
    console.error('translate error');
  }
}
