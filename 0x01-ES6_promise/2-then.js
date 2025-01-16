export default function handleResponseFromAPI(promise) {
  new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(new Error());
    }
  })
    .then(() => console.log('Got a response from the API'));
}
