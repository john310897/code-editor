export const API_URL = 'https://onecompiler-apis.p.rapidapi.com/api/v1/run';
export const SERVER_API_URL='https://verbose-succotash-p6grp74g5v53rp55-3001.app.github.dev/'
export const OPTIONS = {
  method: 'POST',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_APP_URL,
    'x-rapidapi-host': 'onecompiler-apis.p.rapidapi.com',
    'Content-Type': 'application/json',
  },
  body: {
  },
};
export const LANGUAGES = [
  { label: 'Python', value: 'python' },
  { label: 'JavsScript', value: 'javascript' }
]

export const DEFAULT_LANGUAGE = 'javascript'