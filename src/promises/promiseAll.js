function myPromiseAll(promises) {
  let results = [],
    fulfilledPromises = [];

  return new Promise((res, rej) => {
    promises.forEach((p, index) => {
      p.then((val) => {
        fulfilledPromises.push(true);
        results[index] = val;

        if (fulfilledPromises.length === promises.length) {
          res(results);
        }
      }).catch((err) => rej(err));
    });
  });
}

const promises = myPromiseAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]);

promises.then((res) => console.log(res)).catch((err) => console.error(err));
