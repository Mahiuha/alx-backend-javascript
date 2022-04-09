export default function getFullResponseFromAPI(success) {
  return new Promise((res, reject) => {
    if (success) {
      res({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
