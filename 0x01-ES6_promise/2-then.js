import { response } from "express";

export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'success' });
    } else {
      reject(new Error('Got a response from the API'));
    }
  });
}

handleResponseFromAPI()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });