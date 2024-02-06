function myPromiseAny(promises) {
  let results = [];
  var counter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      p.then((result) => {
        resolve(result);
      }).catch((err) => {
        results.push(err);
        ++counter;
        if (counter === promises.length) {
          reject(results);
        }
      });
    });
  });
}

const promises = myPromiseAny([
  Promise.reject(1),
  Promise.resolve(2),
  Promise.resolve(3),
]);

promises.then((res) => console.log(res)).catch((err) => console.error(err));
