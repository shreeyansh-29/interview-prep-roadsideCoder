function myPromiseRace(promises) {
  let mappedPromises = promises.map((p) => {
    return p
      .then((value) => {
        return {
          status: "fulfilled",
          value,
        };
      })
      .catch((reason) => {
        return {
          status: "rejected",
          reason,
        };
      });
  });
  return Promise.all(mappedPromises);
}

const promises = myPromiseRace([
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3),
]);

promises.then((res) => console.log(res)).catch((err) => console.error(err));
