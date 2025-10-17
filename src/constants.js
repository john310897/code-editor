export const API_URL = 'https://onecompiler-apis.p.rapidapi.com/api/v1/run';
export const OPTIONS = {
  method: 'POST',
  headers: {
    'x-rapidapi-key': import.meta.env.API_KEY,
    'x-rapidapi-host': 'onecompiler-apis.p.rapidapi.com',
    'Content-Type': 'application/json',
  },
  body: {
    language: 'python',
    stdin: 'Peter',
    files: [
      {
        name: 'index.py',
        content:
          "import sys\nname = sys.stdin.readline()\nprint('Hello '+ name)",
      },
    ],
  },
};
