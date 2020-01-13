// https://promisesaplus.com/
let promise = new Promise((resolve, reject) => {
  resolve('hello')
});
const promise1 = promise.then(() => {
  return 1;
}).then((data) => {
  console.log('data', data);
})

// promise1.then((data) => {
//   console.log('data', data);
// })
