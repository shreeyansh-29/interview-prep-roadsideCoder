function myPromiseRace(promises) {
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
      }).catch((err) => {
        return rej(err);
      });
    });
  });
}

const promises = myPromiseRace([
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3),
]);

promises.then((res) => console.log(res)).catch((err) => console.error(err));
